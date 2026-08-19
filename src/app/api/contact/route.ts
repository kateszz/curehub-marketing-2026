import { NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * The original Webflow export posted straight to Sender.net from the
 * browser with a bearer token hard-coded in client-side JS — that token
 * was publicly readable in the page source, which isn't safe to carry
 * over. This route gives you the same UX (client submits here, server
 * does the actual work) without exposing any credentials to the browser.
 *
 * To go live: create an API route credential with your email/CRM
 * provider (Sender.net, Resend, etc.), store it in `.env.local` as a
 * server-only variable (no `NEXT_PUBLIC_` prefix), and call that
 * provider's API from here.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, audience } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  // TODO: forward to your email/CRM provider of choice, e.g.:
  //
  // await fetch("https://api.sender.net/v2/subscribers", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.SENDER_API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email, fields: { name, message, audience } }),
  // });

  console.log("New contact form submission:", { name, email, audience, message });

  return NextResponse.json({ ok: true });
}
