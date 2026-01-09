import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${COMPANY.name} pour vos projets de rénovation sur Genève. Téléphone, email ou rendez-vous sur place.`,
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Contactez-nous
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Nous sommes à votre disposition pour répondre à toutes vos questions
          et discuter de vos projets de rénovation.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Phone */}
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            className="group block p-8 bg-card border border-border rounded-lg text-center transition-all hover:border-primary hover:shadow-lg"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
            <p className="text-primary font-medium">{COMPANY.phone}</p>
          </a>

          {/* Email */}
          <a
            href={`mailto:${COMPANY.email}`}
            className="group block p-8 bg-card border border-border rounded-lg text-center transition-all hover:border-primary hover:shadow-lg"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-primary font-medium break-all">{COMPANY.email}</p>
          </a>

          {/* Address */}
          <div className="p-8 bg-card border border-border rounded-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Adresse</h3>
            <p className="text-muted-foreground text-sm">{COMPANY.address}</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Demandez un devis gratuit
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Envoyez-nous un email ou appelez-nous pour discuter de votre projet.
            Nous vous recontacterons dans les plus brefs délais pour établir un
            devis personnalisé et gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${COMPANY.email}?subject=Demande de devis`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              Envoyer un email
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-transparent px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              <Phone className="h-4 w-4" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
