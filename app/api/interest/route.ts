import { NextResponse } from "next/server";
import { validateInterest } from "@/lib/interest";

/**
 * Receives Vanta FC interest-list submissions.
 *
 * Set INTEREST_WEBHOOK_URL (e.g. a Zapier/Make webhook, Formspree endpoint,
 * Google Apps Script, or CRM) to forward submissions as JSON. Until it is set,
 * submissions are validated and logged only.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const { data, errors, valid } = validateInterest((body ?? {}) as Record<string, unknown>);
  if (!valid) return NextResponse.json({ ok: false, errors }, { status: 422 });

  const payload = { ...data, source: "vantafc.com interest form", submittedAt: new Date().toISOString() };
  const webhook = process.env.INTEREST_WEBHOOK_URL;

  if (!webhook) {
    console.warn("[interest] INTEREST_WEBHOOK_URL is not set; submission not forwarded.", {
      program: payload.program,
      playerAge: payload.playerAge,
    });
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (error) {
    console.error("[interest] Failed to forward submission", error);
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, forwarded: true });
}
