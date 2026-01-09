import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Thaqi Rénovation | Rénovation à Genève",
    template: "%s | Thaqi Rénovation",
  },
  description:
    "Thaqi Rénovation - Votre partenaire de confiance pour tous vos projets de rénovation sur Genève. Cuisine, salle de bain, façade, toiture et plus.",
  keywords: [
    "rénovation",
    "suisse",
    "travaux",
    "cuisine",
    "salle de bain",
    "façade",
    "toiture",
  ],
  icons: {
    icon: [
      { url: "/assets/images/logos/favicon/favicon.ico" },
      { url: "/assets/images/logos/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/images/logos/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/assets/images/logos/favicon/apple-touch-icon.png",
  },
  manifest: "/assets/images/logos/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_CH",
    siteName: "Thaqi Rénovation",
    title: "Thaqi Rénovation | Rénovation à Genève",
    description:
      "Votre partenaire de confiance pour tous vos projets de rénovation à Genève. Cuisine, salle de bain, façade, toiture et plus.",
    images: [
      {
        url: "/assets/images/logos/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Thaqi Rénovation",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Thaqi Rénovation | Rénovation à Genève",
    description:
      "Votre partenaire de confiance pour tous vos projets de rénovation à Genève.",
    images: ["/assets/images/logos/favicon/android-chrome-512x512.png"],
  },
  metadataBase: new URL("https://thaqirenovation.ch"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
