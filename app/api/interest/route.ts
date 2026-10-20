import { NextResponse } from "next/server";
import { validateInterest } from "@/lib/interest";

/**
 * Validates Vanta FC interest-list submissions before browser email delivery.
 *
 * Optionally forwards valid submissions to INTEREST_WEBHOOK_URL.
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

  if (webhook) {
    try {
      const webhookResponse = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!webhookResponse.ok) throw new Error(`Webhook responded ${webhookResponse.status}`);
    } catch (error) {
      console.error("[interest] Failed to forward submission", error);
    }
  }

  return NextResponse.json({ ok: true });
}
