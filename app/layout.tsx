import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quigley's Concrete | Stamped Concrete, Patios & Sidewalks | Walworth & Rochester NY",
  description:
    "Quigley's Concrete is a family-owned concrete contractor in Walworth, NY serving the greater Rochester area for over 20 years. Specializing in stamped concrete patios, sidewalks, driveways, pool decks, foundations & decorative concrete. No job is too big or too small. Call (585) 831-7241 for a free estimate.",
  keywords: [
    "concrete contractor Rochester NY",
    "stamped concrete Rochester",
    "concrete patio Rochester NY",
    "sidewalk contractor Rochester",
    "driveway concrete Rochester NY",
    "stamped concrete patio Walworth NY",
    "concrete contractor Walworth NY",
    "pool deck concrete Rochester",
    "decorative concrete Rochester NY",
    "concrete foundations Rochester",
    "Quigleys Concrete",
    "concrete contractor near me",
    "stamped concrete near me",
    "concrete patio near me",
    "Wayne County concrete contractor",
    "Monroe County concrete contractor",
  ],
  openGraph: {
    title: "Quigley's Concrete | Stamped Concrete, Patios & Sidewalks | Rochester NY",
    description: "Family-owned concrete contractor serving the greater Rochester, NY area for over 20 years. Stamped patios, sidewalks, driveways, pool decks & more. Call (585) 831-7241.",
    url: "https://quigleysconcrete.com",
    siteName: "Quigley's Concrete",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1080,
        height: 1080,
        alt: "Quigley's Concrete - Patios & Sidewalks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quigley's Concrete | Stamped Concrete, Patios & Sidewalks | Rochester NY",
    description: "Family-owned concrete contractor serving Rochester, NY for over 20 years. Call (585) 831-7241 for a free estimate.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://quigleysconcrete.com",
  },
  metadataBase: new URL("https://quigleysconcrete.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Quigley's Concrete",
              description: "Family-owned concrete contractor specializing in stamped concrete patios, sidewalks, driveways, pool decks, and decorative concrete. Serving the greater Rochester, NY area for over 20 years.",
              url: "https://quigleysconcrete.com",
              telephone: "+1-585-831-7241",
              email: "Quigleysconcrete@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Walworth",
                addressRegion: "NY",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.1384,
                longitude: -77.2689,
              },
              areaServed: [
                { "@type": "City", name: "Rochester", addressRegion: "NY" },
                { "@type": "City", name: "Walworth", addressRegion: "NY" },
                { "@type": "AdministrativeArea", name: "Monroe County", addressRegion: "NY" },
                { "@type": "AdministrativeArea", name: "Wayne County", addressRegion: "NY" },
              ],
              sameAs: ["https://www.facebook.com/QuigleysConcrete/"],
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "07:00",
                closes: "18:00",
              },
              image: "https://quigleysconcrete.com/logo.jpg",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Concrete Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stamped Concrete Patios" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Sidewalks" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Driveways" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pool Decks" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Decorative Concrete" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Foundations" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Steps & Stoops" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
