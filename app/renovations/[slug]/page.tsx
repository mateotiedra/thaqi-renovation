import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { ImageGallery } from "@/components/ui/image-gallery";
import { FAQSection } from "@/components/ui/faq-section";
import { getRenovationBySlug, RENOVATION_TYPES } from "@/lib/constants";
import { getRenovationImages } from "@/lib/images";
import { getFAQBySlug } from "@/lib/faq-data";
import { ServiceJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/json-ld";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RENOVATION_TYPES.map((renovation) => ({
    slug: renovation.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const renovation = getRenovationBySlug(slug);

  if (!renovation) {
    return {
      title: "Service non trouvé",
    };
  }

  return {
    title: renovation.title,
    description: renovation.shortDescription,
  };
}

// Get related services (services that might complement the current one)
function getRelatedServices(currentSlug: string) {
  const relatedMap: Record<string, string[]> = {
    "salle-de-bain": ["plomberie-chauffage", "carrelage-parquet", "electricite"],
    "cuisine": ["electricite", "plomberie-chauffage", "carrelage-parquet"],
    "facade": ["toiture-isolation", "fenetre-velux", "peinture-tappisserie"],
    "toiture-isolation": ["facade", "faux-plafond", "fenetre-velux"],
    "electricite": ["plomberie-chauffage", "faux-plafond", "cuisine"],
    "plomberie-chauffage": ["salle-de-bain", "cuisine", "electricite"],
    "parquet-carrelage": ["salle-de-bain", "cuisine", "peinture-tappisserie"],
    "peinture-tappisserie": ["faux-plafond", "parquet-carrelage", "facade"],
    "fenetre-velux": ["facade", "toiture-isolation", "porte"],
    "porte": ["fenetre-velux", "electricite", "peinture-tappisserie"],
    "faux-plafond": ["electricite", "peinture-tappisserie", "toiture-isolation"],
    "cheminee-insert-poele": ["toiture-isolation", "plomberie-chauffage", "facade"],
    "amenagement-jardin": ["facade", "drainage", "porte"],
    "drainage": ["amenagement-jardin", "facade", "toiture-isolation"],
    "veranda": ["fenetre-velux", "facade", "electricite"],
  };

  const relatedSlugs = relatedMap[currentSlug] || [];
  return relatedSlugs
    .map((slug) => RENOVATION_TYPES.find((r) => r.slug === slug))
    .filter(Boolean)
    .slice(0, 3);
}

export default async function RenovationPage({ params }: PageProps) {
  const { slug } = await params;
  const renovation = getRenovationBySlug(slug);

  if (!renovation) {
    notFound();
  }

  const images = getRenovationImages(slug);
  const relatedServices = getRelatedServices(slug);
  const faqItems = getFAQBySlug(slug);

  return (
    <>
      <ServiceJsonLd service={renovation} />
      <FAQJsonLd items={faqItems} />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "https://thaqirenovation.ch" },
          { name: "Services", url: "https://thaqirenovation.ch/#services" },
          { name: renovation.title, url: `https://thaqirenovation.ch/renovations/${slug}` },
        ]}
      />
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Header */}
      <section className="text-center mb-12">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/#services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux services
          </Link>
        </Button>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          {renovation.title}
        </h1>
      </section>

      {/* Description */}
      <section className="mb-16 max-w-3xl mx-auto">
        <div className="prose prose-lg prose-gray max-w-none text-muted-foreground">
          {renovation.longDescription.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="mb-4 whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Before/After Comparisons */}
      {images.beforeAfterPairs.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Avant / Après
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {images.beforeAfterPairs.map((pair) => (
              <div key={`pair-${pair.projectNumber}`} className="w-full max-w-xl">
                <BeforeAfterSlider
                  beforeImage={pair.before}
                  afterImage={pair.after[0]}
                  serviceName={renovation.title}
                  projectNumber={pair.projectNumber}
                />
                {pair.after.length > 1 && (
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    Projet {pair.projectNumber} - {pair.after.length} vues après
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Final Gallery */}
      {images.finalImages.length > 0 && (
        <section className="mb-16">
          <ImageGallery groups={images.finalImages} serviceName={renovation.title} />
        </section>
      )}

      {/* FAQ Section */}
      <FAQSection items={faqItems} />

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Services complémentaires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedServices.map((service) => (
              <Link
                key={service!.slug}
                href={`/renovations/${service!.slug}`}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
              >
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {service!.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {service!.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="text-center py-12 bg-muted/30 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Intéressé par ce service ?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Contactez-nous pour discuter de votre projet et obtenir un devis
          personnalisé.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contactez-nous</Link>
        </Button>
      </section>
    </div>
    </>
  );
}
