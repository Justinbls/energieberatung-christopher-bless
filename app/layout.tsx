import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.planungsbuero-bless.de"),
  title: {
    default: "Energieberater Mönchengladbach – Planungsbüro Bless | iSFP & Sanierungsfahrplan",
    template: "%s | Planungsbüro Bless",
  },
  description:
    "Ihr Energieberater in Mönchengladbach: Sanierungsfahrplan (iSFP) erstellen lassen, Heizlastberechnung, Hydraulischer Abgleich & Effizienzhaus-Begleitung. BAFA Zuschuss bis zu 80 % – jetzt anfragen.",
  keywords: [
    "Energieberatung Mönchengladbach",
    "Energieberater Mönchengladbach",
    "iSFP Mönchengladbach",
    "Individueller Sanierungsfahrplan Mönchengladbach",
    "Sanierungsfahrplan erstellen lassen Mönchengladbach",
    "Energieeffizienz-Experte Mönchengladbach",
    "Heizlastberechnung nach DIN EN 12831",
    "Hydraulischer Abgleich Förderung",
    "Wärmeschutznachweis für Förderanträge",
    "Energetische Baubegleitung KfW",
    "Energieberater Kosten Mönchengladbach",
    "iSFP Förderung BAFA 2026",
    "BAFA Zuschuss Energieberatung beantragen",
    "KfW Fördermittel Heizungstausch Beratung",
    "Planungsbüro Bless",
    "Christopher Bless",
    "Gebäudeenergieberater HWK",
  ],
  authors: [{ name: "Christopher Bless", url: "https://www.planungsbuero-bless.de" }],
  creator: "Planungsbüro Bless",
  publisher: "Planungsbüro Bless",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.planungsbuero-bless.de",
    siteName: "Planungsbüro Bless",
    title: "Energieberater Mönchengladbach – Planungsbüro Bless | iSFP & Sanierungsfahrplan",
    description:
      "Ihr Energieberater in Mönchengladbach: Sanierungsfahrplan (iSFP) erstellen lassen, Heizlastberechnung, Hydraulischer Abgleich & Effizienzhaus-Begleitung. BAFA Zuschuss bis zu 80 %.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energieberater Mönchengladbach – Planungsbüro Bless | iSFP & Sanierungsfahrplan",
    description:
      "Ihr Energieberater in Mönchengladbach: Sanierungsfahrplan (iSFP) erstellen lassen, Heizlastberechnung, Hydraulischer Abgleich & Effizienzhaus-Begleitung. BAFA Zuschuss bis zu 80 %.",
  },
  alternates: {
    canonical: "https://www.planungsbuero-bless.de",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Planungsbüro Bless",
  description:
    "Zertifizierter Energieberater in Mönchengladbach. Heizlastberechnung, Hydraulischer Abgleich, Sanierungsfahrplan und Effizienzhaus-Begleitung.",
  url: "https://www.planungsbuero-bless.de",
  telephone: "+491725377710",
  email: "info@planungsbuero-bless.de",
  founder: { "@type": "Person", name: "Christopher Bless" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mülgaustraße 153a",
    addressLocality: "Mönchengladbach",
    postalCode: "41199",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.1657,
    longitude: 6.4576,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 51.1657, longitude: 6.4576 },
    geoRadius: "80000",
  },
  serviceType: [
    "Energieberatung Mönchengladbach",
    "Heizlastberechnung nach DIN EN 12831",
    "Hydraulischer Abgleich Förderung",
    "Individueller Sanierungsfahrplan iSFP",
    "Wärmeschutznachweis für Förderanträge",
    "Energetische Baubegleitung KfW",
    "Effizienzhaus-Sanierung",
    "BAFA Zuschuss Energieberatung",
  ],
  hasCredential: [
    "Gebäudeenergieberater (HWK)",
    "Eingetragener Energieeffizienz Experte",
    "Staatlich geprüfter Hochbautechniker",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
