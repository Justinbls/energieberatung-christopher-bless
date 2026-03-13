"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const qualifications = [
  {
    label: "Gebäudeenergieberater (HWK)",
    detail: "Geprüft von der Handwerkskammer Düsseldorf",
    icon: "✦",
  },
  {
    label: "BAFA-zugelassen",
    detail: "Bundesamt für Wirtschaft und Ausfuhrkontrolle",
    icon: "✦",
  },
  {
    label: "KfW-Sachverständiger",
    detail: "Berechtigt zur Ausstellung von Bestätigungen",
    icon: "✦",
  },
  {
    label: "Staatlich geprüfter Hochbautechniker",
    detail: "Fachkenntnisse in Baukonstruktion und Bauphysik",
    icon: "✦",
  },
];

const values = [
  {
    title: "Präzision",
    text: "Jede Berechnung, jede Empfehlung basiert auf normativen Grundlagen und aktuellen bauphysikalischen Erkenntnissen.",
  },
  {
    title: "Unabhängigkeit",
    text: "Wir sind keinem Hersteller oder Handwerker verpflichtet. Unsere Beratung orientiert sich ausschließlich an Ihren Interessen.",
  },
  {
    title: "Verlässlichkeit",
    text: "Von der ersten Beratung bis zum abschließenden Verwendungsnachweis stehen wir an Ihrer Seite.",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function UeberUnsPage() {
  const { ref: introRef, inView: introInView } = useInView();
  const { ref: valuesRef, inView: valuesInView } = useInView();
  const { ref: qualRef, inView: qualInView } = useInView();

  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          background: "var(--color-background)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(45,80,22,0.05) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
          {/* Text */}
          <div
            ref={introRef}
            style={{
              opacity: introInView ? 1 : 0,
              transform: introInView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-secondary)", marginBottom: "1rem", fontWeight: 500 }}>
              Über uns
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 700,
                color: "var(--color-text)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Planungsbüro Bless –
              <br />
              <em style={{ color: "var(--color-primary)", fontStyle: "italic" }}>Ihr Energieberater</em>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Energieberatung ist mehr als das Ausfüllen von Förderanträgen. Es geht darum,
              Gebäude wirklich zu verstehen – die Physik, die Technik, die Menschen, die darin leben.
            </p>
            <p style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Mit über 15 Jahren Erfahrung in der energetischen Gebäudeberatung kennen wir die Fallstricke
              und Potenziale eines jeden Sanierungsprojekts. Wir beraten Sie nicht nur – wir begleiten Sie.
            </p>
            <Link
              href="/kontakt"
              style={{
                background: "var(--color-primary)",
                color: "#FAF7F2",
                padding: "0.85rem 1.75rem",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Beratungsgespräch vereinbaren
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Illustration */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "#F5F0E8",
                border: "1px solid var(--color-border)",
                borderRadius: "16px",
                aspectRatio: "4/5",
                maxWidth: "400px",
                overflow: "hidden",
              }}
            >
              <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
                {/* Sky background */}
                <rect width="400" height="500" fill="#F5F0E8" />

                {/* Sun */}
                <circle cx="320" cy="80" r="38" fill="#C8A96E" opacity="0.9" />
                <circle cx="320" cy="80" r="28" fill="#D4B87A" />
                {/* Sun rays */}
                {[0,45,90,135,180,225,270,315].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180;
                  return (
                    <line key={i}
                      x1={320 + Math.cos(rad) * 44} y1={80 + Math.sin(rad) * 44}
                      x2={320 + Math.cos(rad) * 56} y2={80 + Math.sin(rad) * 56}
                      stroke="#C8A96E" strokeWidth="3" strokeLinecap="round"
                    />
                  );
                })}

                {/* Ground */}
                <rect x="0" y="390" width="400" height="110" fill="#D4EBBC" />
                <rect x="0" y="390" width="400" height="8" fill="#5DB82A" opacity="0.4" />

                {/* House body */}
                <rect x="110" y="240" width="180" height="155" fill="#FAF7F2" stroke="#2D5016" strokeWidth="3" strokeLinejoin="round" />

                {/* Roof */}
                <polygon points="90,245 200,140 310,245" fill="#8B4513" stroke="#6B3210" strokeWidth="3" strokeLinejoin="round" />

                {/* Chimney */}
                <rect x="240" y="158" width="22" height="45" fill="#A0522D" stroke="#6B3210" strokeWidth="2.5" />
                <rect x="236" y="154" width="30" height="8" rx="2" fill="#8B4513" stroke="#6B3210" strokeWidth="2" />

                {/* Door */}
                <rect x="175" y="315" width="50" height="80" rx="4" fill="#C8A96E" stroke="#2D5016" strokeWidth="2.5" />
                <circle cx="218" cy="358" r="4" fill="#2D5016" />

                {/* Windows */}
                <rect x="125" y="265" width="50" height="45" rx="4" fill="#AED6F0" stroke="#2D5016" strokeWidth="2.5" />
                <line x1="150" y1="265" x2="150" y2="310" stroke="#2D5016" strokeWidth="1.5" />
                <line x1="125" y1="287" x2="175" y2="287" stroke="#2D5016" strokeWidth="1.5" />

                <rect x="225" y="265" width="50" height="45" rx="4" fill="#AED6F0" stroke="#2D5016" strokeWidth="2.5" />
                <line x1="250" y1="265" x2="250" y2="310" stroke="#2D5016" strokeWidth="1.5" />
                <line x1="225" y1="287" x2="275" y2="287" stroke="#2D5016" strokeWidth="1.5" />

                {/* Tree left */}
                <rect x="52" y="330" width="10" height="65" rx="3" fill="#8B6B3A" />
                <ellipse cx="57" cy="295" rx="28" ry="42" fill="#3A7A1A" stroke="#2D5016" strokeWidth="2.5" />
                <ellipse cx="57" cy="295" rx="18" ry="30" fill="#4A9520" />
                {/* Tree stripes */}
                <line x1="50" y1="280" x2="64" y2="295" stroke="#2D5016" strokeWidth="1.5" opacity="0.5" />
                <line x1="50" y1="300" x2="64" y2="315" stroke="#2D5016" strokeWidth="1.5" opacity="0.5" />

                {/* Tree right */}
                <rect x="338" y="345" width="9" height="50" rx="3" fill="#8B6B3A" />
                <ellipse cx="342" cy="312" rx="22" ry="36" fill="#3A7A1A" stroke="#2D5016" strokeWidth="2.5" />
                <ellipse cx="342" cy="312" rx="14" ry="24" fill="#4A9520" />
                <line x1="336" y1="300" x2="348" y2="312" stroke="#2D5016" strokeWidth="1.5" opacity="0.5" />
                <line x1="336" y1="318" x2="348" y2="330" stroke="#2D5016" strokeWidth="1.5" opacity="0.5" />

                {/* Person / consultant */}
                {/* Body */}
                <rect x="52" y="390" width="30" height="50" rx="6" fill="#2D5016" />
                {/* Head */}
                <circle cx="67" cy="374" r="18" fill="#D4A574" stroke="#2D5016" strokeWidth="2" />
                {/* Hair */}
                <path d="M49,370 Q67,350 85,370" fill="#5A3A1A" />
                {/* Arms */}
                <line x1="52" y1="400" x2="34" y2="420" stroke="#2D5016" strokeWidth="5" strokeLinecap="round" />
                <line x1="82" y1="400" x2="100" y2="420" stroke="#2D5016" strokeWidth="5" strokeLinecap="round" />
                {/* Legs */}
                <line x1="60" y1="440" x2="55" y2="470" stroke="#1E3610" strokeWidth="6" strokeLinecap="round" />
                <line x1="74" y1="440" x2="79" y2="470" stroke="#1E3610" strokeWidth="6" strokeLinecap="round" />
                {/* Clipboard */}
                <rect x="96" y="408" width="26" height="32" rx="3" fill="#FAF7F2" stroke="#2D5016" strokeWidth="2" />
                <rect x="104" y="404" width="10" height="7" rx="2" fill="#8B4513" />
                <line x1="100" y1="418" x2="118" y2="418" stroke="#C8A96E" strokeWidth="1.5" />
                <line x1="100" y1="425" x2="118" y2="425" stroke="#C8A96E" strokeWidth="1.5" />
                <line x1="100" y1="432" x2="112" y2="432" stroke="#C8A96E" strokeWidth="1.5" />

                {/* Energy badge / leaf */}
                <circle cx="340" cy="180" r="22" fill="#2D5016" opacity="0.15" />
                <path d="M340,165 C340,165 325,172 325,183 C325,192 332,198 340,198 C348,198 355,192 355,183 C355,172 340,165 340,165Z" fill="#5DB82A" stroke="#2D5016" strokeWidth="2" />
                <line x1="340" y1="198" x2="340" y2="210" stroke="#2D5016" strokeWidth="2" strokeLinecap="round" />
                <path d="M333,183 C336,178 344,178 347,183" fill="none" stroke="#FAF7F2" strokeWidth="1.5" strokeLinecap="round" />

                {/* Thermometer icon */}
                <rect x="72" y="148" width="12" height="36" rx="6" fill="#FAF7F2" stroke="#8B4513" strokeWidth="2" />
                <circle cx="78" cy="188" r="9" fill="#8B4513" stroke="#6B3210" strokeWidth="1.5" />
                <rect x="75" y="164" width="6" height="22" rx="3" fill="#8B4513" opacity="0.7" />
                {/* Small ticks */}
                <line x1="84" y1="158" x2="88" y2="158" stroke="#8B4513" strokeWidth="1.5" />
                <line x1="84" y1="166" x2="87" y2="166" stroke="#8B4513" strokeWidth="1.5" />
                <line x1="84" y1="174" x2="88" y2="174" stroke="#8B4513" strokeWidth="1.5" />

                {/* Path / walkway */}
                <polygon points="185,395 215,395 225,470 175,470" fill="#D4C9B8" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Werte */}
      <section
        ref={valuesRef}
        style={{ padding: "6rem 2rem", background: "var(--color-surface)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-secondary)", marginBottom: "1rem", fontWeight: 500 }}>
              Unsere Grundsätze
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: "var(--color-text)",
              }}
              className="line-accent"
            >
              Wofür wir stehen
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {values.map((value, i) => (
              <div
                key={value.title}
                style={{
                  background: "var(--color-background)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "12px",
                  padding: "2rem",
                  opacity: valuesInView ? 1 : 0,
                  transform: valuesInView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "3px",
                    background: "var(--color-secondary)",
                    borderRadius: "2px",
                    marginBottom: "1.25rem",
                  }}
                />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.75rem" }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifikationen */}
      <section
        ref={qualRef}
        style={{ padding: "6rem 2rem", background: "var(--color-background)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="qual-grid">
          <div
            style={{
              opacity: qualInView ? 1 : 0,
              transform: qualInView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-secondary)", marginBottom: "1rem", fontWeight: 500 }}>
              Zertifizierungen
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--color-text)", marginBottom: "1.5rem" }} className="line-accent">
              Qualifikationen
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: 1.75 }}>
              Als zugelassenes Planungsbüro sind wir berechtigt, alle erforderlichen Nachweise
              und Bestätigungen für Förderprogramme von BAFA und KfW zu erstellen.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {qualifications.map((qual, i) => (
              <div
                key={qual.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  opacity: qualInView ? 1 : 0,
                  transform: qualInView ? "translateX(0)" : "translateX(20px)",
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                }}
              >
                <div style={{ color: "var(--color-primary)", fontSize: "1rem", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 2l2 6h6l-5 3.6 1.9 5.9L10 14l-4.9 3.5L7 11.6 2 8h6L10 2z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--color-text)" }}>{qual.label}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "2px" }}>{qual.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .qual-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}
