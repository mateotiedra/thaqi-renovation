import Link from "next/link";
import Image from "next/image";
import { RENOVATION_TYPES } from "@/lib/constants";
import { getAllRenovationPreviews } from "@/lib/images";

export function ServicesGrid() {
  const previews = getAllRenovationPreviews();

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre gamme complète de services de rénovation pour
            transformer votre espace de vie.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {RENOVATION_TYPES.map((renovation) => {
            const previewImage = previews.get(renovation.slug);

            return (
              <Link
                key={renovation.slug}
                href={`/renovations/${renovation.slug}`}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-muted"
              >
                {/* Background Image or Placeholder */}
                {previewImage ? (
                  <Image
                    src={previewImage}
                    alt={renovation.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40" />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {renovation.title}
                  </h3>
                  <p className="text-sm text-white/80 line-clamp-2">
                    {renovation.shortDescription}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
