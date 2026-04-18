import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Planungsbüro Bless – Energieberater Mönchengladbach";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a2e0f 0%, #2D5016 60%, #3d6b1f 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        {/* Top: Logo-Bereich */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            PB
          </div>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", fontFamily: "sans-serif" }}>
            Planungsbüro Bless · Mönchengladbach
          </span>
        </div>

        {/* Mitte: Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "58px",
              fontWeight: "700",
              color: "white",
              lineHeight: 1.15,
              maxWidth: "820px",
            }}
          >
            Ihr Energieberater in Mönchengladbach
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.75)",
              fontFamily: "sans-serif",
              fontWeight: "400",
              maxWidth: "700px",
              lineHeight: 1.5,
            }}
          >
            iSFP · Heizlastberechnung · Hydraulischer Abgleich · BAFA &amp; KfW Förderung
          </div>
        </div>

        {/* Bottom: Badge-Zeile */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Gebäudeenergieberater HWK", "Energieeffizienz-Experte", "BAFA anerkannt"].map(
            (label) => (
              <div
                key={label}
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "20px",
                  padding: "8px 20px",
                  color: "white",
                  fontSize: "15px",
                  fontFamily: "sans-serif",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
