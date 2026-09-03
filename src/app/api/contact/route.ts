import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contact form handler.
 *
 * The original Webflow export posted straight to Sender.net from the
 * browser with a bearer token hard-coded in client-side JS — that token
 * was publicly readable in the page source, which isn't safe to carry
 * over. This route gives you the same UX (client submits here, server
 * does the actual work) without exposing any credentials to the browser.
 *
 * Submissions are emailed via Resend. Required server-only env vars
 * (no `NEXT_PUBLIC_` prefix — these must never reach the browser):
 *
 *   RESEND_API_KEY    from resend.com → API Keys
 *   CONTACT_TO_EMAIL  optional, defaults to the address below
 *   CONTACT_FROM_EMAIL  optional, must be on a domain verified in Resend
 */

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "mark.erdelyi@curehub.eu";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Curehub Website <onboarding@resend.dev>";

/** Keeps a stray newline in a field from forging extra mail headers. */
function oneLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, audience } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form email not sent.");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  const senderName = oneLine(name);
  const senderEmail = oneLine(email);
  const kind =
    audience === "Personal" || audience === "Corporate" ? audience : "Unspecified";
  const text = message.trim();

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: senderEmail,
      subject: `Curehub website enquiry — ${senderName} (${kind})`,
      text: [
        `Name: ${senderName}`,
        `Email: ${senderEmail}`,
        `Enquiry type: ${kind}`,
        "",
        text,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(senderName)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(senderEmail)}">${escapeHtml(senderEmail)}</a></p>
        <p><strong>Enquiry type:</strong> ${escapeHtml(kind)}</p>
        <p style="white-space:pre-wrap">${escapeHtml(text)}</p>
      `,
    });

    if (error) {
      console.error("Resend rejected the contact form email:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 }
      );
    }
  } catch (cause) {
    console.error("Contact form email failed:", cause);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
