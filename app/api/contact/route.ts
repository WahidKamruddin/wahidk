import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "../../lib/contact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** `onboarding@resend.dev` works without a verified domain, but only delivers
 *  to the address that owns the Resend account. Set CONTACT_FROM to an address
 *  on a domain you've verified for production. */
const FROM = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const body = (payload ?? {}) as Record<string, unknown>;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company ?? "").trim();

  // Bots fill hidden fields — accept the request but do nothing.
  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }
  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: "One of those fields is too long." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — cannot send contact email.");
    return NextResponse.json(
      { error: "The contact form isn't configured yet. Email me directly instead." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio contact — ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend returned an error:", error);
      return NextResponse.json(
        { error: "Couldn't send your message. Please try again in a bit." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Contact route failed:", err);
    return NextResponse.json(
      { error: "Couldn't send your message. Please try again in a bit." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
