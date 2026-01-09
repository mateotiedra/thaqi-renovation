import { COMPANY, RENOVATION_TYPES, RenovationType } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thaqirenovation.ch/#organization",
    name: COMPANY.name,
    description: COMPANY.tagline,
    url: "https://thaqirenovation.ch",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chemin de la Fauconnerie",
      addressLocality: "Plan-les-Ouates",
      postalCode: "1228",
      addressCountry: "CH",
      addressRegion: "Genève",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 46.1667,
      longitude: 6.1167,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Genève",
      },
      {
        "@type": "City",
        name: "Lausanne",
      },
      {
        "@type": "State",
        name: "Suisse romande",
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    image: "https://thaqirenovation.ch/assets/images/logos/main.jpg",
    logo: "https://thaqirenovation.ch/assets/images/logos/favicon/android-chrome-512x512.png",
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de rénovation",
      itemListElement: RENOVATION_TYPES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: `https://thaqirenovation.ch/renovations/${service.slug}`,
          provider: {
            "@type": "LocalBusiness",
            name: COMPANY.name,
          },
          areaServed: {
            "@type": "State",
            name: "Suisse romande",
          },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface ServiceJsonLdProps {
  service: RenovationType;
}

export function ServiceJsonLd({ service }: ServiceJsonLdProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription.split("\n\n")[0],
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://thaqirenovation.ch/#organization",
      name: COMPANY.name,
      telephone: COMPANY.phone,
      email: COMPANY.email,
    },
    areaServed: [
      { "@type": "City", name: "Genève" },
      { "@type": "City", name: "Lausanne" },
      { "@type": "City", name: "Nyon" },
      { "@type": "State", name: "Canton de Vaud" },
      { "@type": "State", name: "Canton de Genève" },
    ],
    serviceType: "Rénovation",
    url: `https://thaqirenovation.ch/renovations/${service.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface FAQJsonLdProps {
  items: { question: string; answer: string }[];
}

export function FAQJsonLd({ items }: FAQJsonLdProps) {
  if (items.length === 0) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
