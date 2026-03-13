import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns – Energieeffizienz-Experte Mönchengladbach",
  description:
    "Planungsbüro Bless – Ihr Energieeffizienz-Experte in Mönchengladbach. Gebäudeenergieberater (HWK), eingetragener Energieberater für BAFA & KfW Förderprogramme, staatlich geprüfter Hochbautechniker. 10 Jahre Erfahrung.",
  keywords: [
    "Energieberater Mönchengladbach",
    "Energieeffizienz-Experte Mönchengladbach",
    "Gebäudeenergieberater HWK",
    "Wie finde ich einen zertifizierten Energieberater",
    "BAFA zugelassener Energieberater",
    "KfW Energieberater Mönchengladbach",
    "Christopher Bless",
    "Planungsbüro Bless",
  ],
  alternates: {
    canonical: "https://www.planungsbuero-bless.de/ueber-uns",
  },
  openGraph: {
    title: "Über uns – Energieeffizienz-Experte Mönchengladbach | Planungsbüro Bless",
    description:
      "Ihr Energieeffizienz-Experte in Mönchengladbach mit 10 Jahren Erfahrung. Gebäudeenergieberater (HWK), eingetragener Experte für BAFA & KfW Förderprogramme.",
    url: "https://www.planungsbuero-bless.de/ueber-uns",
  },
};

export default function UeberUnsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
