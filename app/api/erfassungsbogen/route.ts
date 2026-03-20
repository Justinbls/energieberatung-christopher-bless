import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import PDFDocument from "pdfkit";

const resend = new Resend(process.env.RESEND_API_KEY);

async function generatePDF(data: Record<string, string>): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50, size: "A4" });
    const chunks: Buffer[] = [];

    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const PRIMARY = "#2D5016";
    const MUTED = "#6B6B5A";
    const BORDER = "#E8E4DC";

    // Header
    doc.rect(0, 0, doc.page.width, 80).fill(PRIMARY);
    doc.fillColor("#FAF7F2").fontSize(22).font("Helvetica-Bold")
      .text("Erfassungsbogen", 50, 25);
    doc.fillColor("#FAF7F2").fontSize(10).font("Helvetica")
      .text("Planungsbüro Bless – Energieberatung", 50, 52);
    doc.moveDown(2);

    function section(title: string) {
      doc.moveDown(0.5);
      doc.fillColor(PRIMARY).fontSize(11).font("Helvetica-Bold").text(title.toUpperCase(), { characterSpacing: 1 });
      doc.moveTo(50, doc.y + 4).lineTo(doc.page.width - 50, doc.y + 4).strokeColor(BORDER).lineWidth(1).stroke();
      doc.moveDown(0.75);
    }

    function field(label: string, value: string) {
      if (!value) return;
      const y = doc.y;
      doc.fillColor(MUTED).fontSize(9).font("Helvetica").text(label, 50, y, { width: 180 });
      doc.fillColor("#1C1C1C").fontSize(10).font("Helvetica").text(value || "–", 240, y, { width: 300 });
      doc.moveDown(0.6);
    }

    // Persönliche Daten
    section("Persönliche Daten");
    field("Vorname", data.vorname);
    field("Nachname", data.nachname);
    field("Straße / Hausnummer", `${data.strasse} ${data.hausnummer}`);
    field("PLZ / Ort", `${data.plz} ${data.ort}`);
    field("Geburtsdatum", data.geburtsdatum);
    field("Geburtsort", data.geburtsort);

    // Bankdaten
    section("Bankdaten & Steuer");
    field("IBAN", data.iban);
    field("BIC", data.bic);
    field("Steueridentifikationsnummer", data.steuerIdNr);

    // Kontakt
    section("Kontakt");
    field("Telefon", data.telefon);
    field("E-Mail", data.email);

    // Gebäude
    section("Gebäude / Objekt");
    field("Straße / Hausnummer", `${data.gebaeudeStrasse} ${data.gebaeudeHausnummer}`);
    field("PLZ / Ort", `${data.gebaeudePlz} ${data.gebaeudeOrt}`);
    field("Datum Bauantrag / Baujahr", data.baujahr);
    field("Wohn- / Gewerbeeinheiten", data.wohneinheiten);

    // Footer
    const footerY = doc.page.height - 50;
    doc.moveTo(50, footerY - 10).lineTo(doc.page.width - 50, footerY - 10).strokeColor(BORDER).lineWidth(1).stroke();
    doc.fillColor(MUTED).fontSize(8).font("Helvetica")
      .text(
        `Planungsbüro Bless · Mülgaustraße 153a · 41199 Mönchengladbach · info@planungsbuero-bless.de`,
        50, footerY, { align: "center", width: doc.page.width - 100 }
      );

    doc.end();
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.vorname || !body.nachname || !body.email) {
    return NextResponse.json({ error: "Pflichtfelder fehlen." }, { status: 400 });
  }

  try {
    const pdfBuffer = await generatePDF(body);

    await resend.emails.send({
      from: "Erfassungsbogen <info@planungsbuero-bless.de>",
      to: "info@planungsbuero-bless.de",
      replyTo: body.email,
      subject: `Erfassungsbogen – ${body.vorname} ${body.nachname}`,
      html: `
        <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 2rem; background: #FAF7F2; border-radius: 8px;">
          <h2 style="color: #2D5016; font-size: 1.3rem; margin-bottom: 0.25rem;">Neuer Erfassungsbogen</h2>
          <p style="color: #6B6B5A; font-size: 0.875rem; margin-top: 0; margin-bottom: 1.5rem;">
            Von <strong style="color: #1C1C1C;">${body.vorname} ${body.nachname}</strong> (${body.email})
          </p>
          <p style="color: #6B6B5A; font-size: 0.875rem; line-height: 1.6;">
            Der vollständige Erfassungsbogen ist als PDF-Anhang beigefügt.
          </p>
        </div>
      `,
      attachments: [
        {
          filename: `Erfassungsbogen_${body.nachname}_${body.vorname}.pdf`,
          content: pdfBuffer.toString("base64"),
        },
      ],
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Erfassungsbogen Fehler:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
