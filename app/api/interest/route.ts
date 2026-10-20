import { NextResponse } from "next/server";
import { validateInterest } from "@/lib/interest";
import { site } from "@/lib/site";

/**
 * Receives Vanta FC interest-list submissions.
 *
 * Delivers submissions through FormSubmit and optionally forwards them to
 * INTEREST_WEBHOOK_URL as an additional destination.
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
  const emailPayload = {
    _subject: `New Vanta FC interest: ${data.playerName} (${data.program || "Program not specified"})`,
    _template: "table",
    _captcha: "false",
    _replyto: data.email,
    "Parent/Guardian": data.parentName,
    Email: data.email,
    Phone: data.phone || "—",
    "Player name": data.playerName,
    "Player age": data.playerAge,
    "Soccer experience": data.experience || "—",
    Program: data.program || "—",
    Message: data.message || "—",
    "Submitted at": payload.submittedAt,
  };

  let response: Response;
  try {
    response = await fetch(process.env.FORMSUBMIT_URL ?? `https://formsubmit.co/ajax/${site.forms.notifyEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: `${new URL(request.url).origin}/join`,
      },
      body: JSON.stringify(emailPayload),
    });
  } catch (error) {
    console.error("[interest] Email delivery failed", {
      status: null,
      message: error instanceof Error ? error.message : "FormSubmit request failed",
    });
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 502 });
  }

  const responseJson: unknown = await response.json().catch(() => null);
  const formSubmitResult =
    responseJson !== null && typeof responseJson === "object"
      ? (responseJson as { success?: unknown; message?: unknown })
      : null;
  const formSubmitMessage = typeof formSubmitResult?.message === "string" ? formSubmitResult.message : null;

  if (!response.ok || (formSubmitResult?.success !== "true" && formSubmitResult?.success !== true)) {
    console.error("[interest] Email delivery failed", {
      status: response.status,
      message: formSubmitMessage ?? "Invalid or unsuccessful FormSubmit response",
    });
    return NextResponse.json({ ok: false, error: "Something went wrong. Please try again." }, { status: 502 });
  }

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

  return NextResponse.json({ ok: true, forwarded: true });
}
