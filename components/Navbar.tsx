"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

const leistungenLinks = [
  { href: "/leistungen#heizlast", label: "Heizlastberechnung" },
  { href: "/leistungen#hydraulik", label: "Hydraulischer Abgleich" },
  { href: "/leistungen#fahrplan", label: "Sanierungsfahrplan" },
  { href: "/leistungen#einzelmassnahmen", label: "Einzelmaßnahmen" },
  { href: "/leistungen#effizienzhaus", label: "Effizienzhaus" },
  { href: "/leistungen#waermeschutz", label: "Wärmeschutznachweis" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(250,247,242,0.95)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(45,80,22,0.1)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "88px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", marginTop: scrolled ? "0px" : "52px", transition: "margin-top 0.3s ease" }}>
          <Image
            src="/logo2.png.png"
            alt="Planungsbüro Bless"
            width={scrolled ? 140 : 288}
            height={scrolled ? 70 : 144}
            style={{ objectFit: "contain", transition: "width 0.3s ease, height 0.3s ease" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}
          className="hidden-mobile"
        >
          {/* Start */}
          <Link
            href="/"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.95rem",
              fontWeight: pathname === "/" ? 600 : 400,
              color: pathname === "/" ? "var(--color-primary)" : "var(--color-text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
              position: "relative",
            }}
          >
            Start
            {pathname === "/" && (
              <span style={{ position: "absolute", bottom: "-4px", left: 0, right: 0, height: "2px", background: "var(--color-secondary)", borderRadius: "1px" }} />
            )}
          </Link>

          {/* Leistungen mit Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setLeistungenOpen(true)}
            onMouseLeave={() => setLeistungenOpen(false)}
          >
            <Link
              href="/leistungen"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.95rem",
                fontWeight: pathname === "/leistungen" ? 600 : 400,
                color: pathname === "/leistungen" ? "var(--color-primary)" : "var(--color-text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Leistungen
              {pathname === "/leistungen" && (
                <span style={{ position: "absolute", bottom: "-4px", left: 0, right: 0, height: "2px", background: "var(--color-secondary)", borderRadius: "1px" }} />
              )}
            </Link>
            {leistungenOpen && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 12px)",
                left: "50%",
                transform: "translateX(-50%)",
                background: "var(--color-primary)",
                borderRadius: "8px",
                padding: "0.5rem 0",
                minWidth: "220px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                zIndex: 200,
              }}>
                {leistungenLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      display: "block",
                      padding: "0.6rem 1.25rem",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.9rem",
                      color: "#FAF7F2",
                      textDecoration: "none",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Über uns */}
          <Link
            href="/ueber-uns"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.95rem",
              fontWeight: pathname === "/ueber-uns" ? 600 : 400,
              color: pathname === "/ueber-uns" ? "var(--color-primary)" : "var(--color-text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
              position: "relative",
            }}
          >
            Über uns
            {pathname === "/ueber-uns" && (
              <span style={{ position: "absolute", bottom: "-4px", left: 0, right: 0, height: "2px", background: "var(--color-secondary)", borderRadius: "1px" }} />
            )}
          </Link>

          <Link
            href="/kontakt"
            style={{
              background: "var(--color-primary)",
              color: "#FAF7F2",
              padding: "0.5rem 1.25rem",
              borderRadius: "4px",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.2s",
              letterSpacing: "0.02em",
            }}
          >
            Beratung anfragen
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "var(--color-primary)",
          }}
          className="show-mobile"
          aria-label="Menü öffnen"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--color-background)",
            borderTop: "1px solid var(--color-border)",
            padding: "1rem 2rem 1.5rem",
          }}
        >
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "0.75rem 0", borderBottom: "1px solid var(--color-surface-dark)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", fontWeight: pathname === "/" ? 600 : 400, color: pathname === "/" ? "var(--color-primary)" : "var(--color-text)", textDecoration: "none" }}>Start</Link>

          {/* Leistungen aufklappbar */}
          <div style={{ borderBottom: "1px solid var(--color-surface-dark)" }}>
            <button
              onClick={() => setLeistungenOpen(!leistungenOpen)}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0.75rem 0", background: "none", border: "none", cursor: "pointer", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", fontWeight: pathname === "/leistungen" ? 600 : 400, color: pathname === "/leistungen" ? "var(--color-primary)" : "var(--color-text)", textAlign: "left" }}
            >
              Leistungen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: leistungenOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {leistungenOpen && (
              <div style={{ paddingBottom: "0.5rem" }}>
                {leistungenLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => { setMenuOpen(false); setLeistungenOpen(false); }}
                    style={{ display: "block", padding: "0.5rem 0 0.5rem 1rem", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: "var(--color-text-muted)", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/ueber-uns" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "0.75rem 0", borderBottom: "1px solid var(--color-surface-dark)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", fontWeight: pathname === "/ueber-uns" ? 600 : 400, color: pathname === "/ueber-uns" ? "var(--color-primary)" : "var(--color-text)", textDecoration: "none" }}>Über uns</Link>
          <Link href="/kontakt" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "0.75rem 0", fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", fontWeight: pathname === "/kontakt" ? 600 : 400, color: pathname === "/kontakt" ? "var(--color-primary)" : "var(--color-text)", textDecoration: "none" }}>Kontakt</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
