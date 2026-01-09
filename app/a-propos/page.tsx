import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À Propos",
  description: `Découvrez l'histoire et les valeurs de ${COMPANY.name}, votre partenaire de confiance pour tous vos projets de rénovation sur Genève.`,
};

export default function AProposPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          À Propos de {COMPANY.name}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {COMPANY.tagline}
        </p>
      </section>

      {/* Story Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Notre Histoire
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Fondé à Genève, {COMPANY.name} est né de la passion pour
              l&apos;artisanat et le désir de transformer les espaces de vie de
              nos clients. Avec des années d&apos;expérience dans le domaine de
              la rénovation, nous avons développé une expertise reconnue dans
              tous les aspects de la transformation résidentielle.
            </p>
            <p>
              Notre équipe de professionnels qualifiés s&apos;engage à fournir
              un travail de qualité supérieure, respectant les délais et les
              budgets convenus. Nous croyons que chaque projet est unique et
              mérite une attention personnalisée.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-16 bg-muted/30 rounded-lg py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Notre Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Offrir à nos clients des services de rénovation de première qualité,
            en combinant savoir-faire artisanal et techniques modernes pour
            créer des espaces qui répondent parfaitement à leurs besoins et à
            leurs rêves.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Qualité</h3>
              <p className="text-muted-foreground text-sm">
                Nous ne faisons aucun compromis sur la qualité des matériaux et
                de l&apos;exécution. Chaque détail compte.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Confiance</h3>
              <p className="text-muted-foreground text-sm">
                Transparence, honnêteté et respect des engagements sont au cœur
                de notre relation avec chaque client.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Nous restons à la pointe des nouvelles techniques et tendances
                pour offrir des solutions modernes et durables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-primary/5 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4">
          Prêt à transformer votre espace ?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Contactez-nous pour discuter de votre projet et découvrir comment nous
          pouvons vous aider.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contactez-nous</Link>
        </Button>
      </section>
    </div>
  );
}
