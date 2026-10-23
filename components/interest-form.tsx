"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { experienceOptions, programFormOptions } from "@/lib/content";
import {
  buildInterestEmail,
  formSubmitEndpoint,
  isFormSubmitSuccess,
  requiredInterestFields,
  validateInterest,
  type InterestSubmission,
} from "@/lib/interest";
import { playerAges } from "@/lib/site";
import { Button } from "./button";
import { CrestBadge } from "./crest";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<keyof InterestSubmission, string>>;

const inputClass =
  "block w-full rounded-none border-0 border-b border-white/20 bg-transparent px-0 py-3 text-lg text-chalk placeholder:text-steel/70 transition-colors focus:border-accent focus:ring-0 focus:outline-none aria-[invalid=true]:border-red-400";

function Field({
  id,
  label,
  error,
  required,
  children,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="eyebrow block text-steel">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export function InterestForm({ defaultProgram = "" }: { defaultProgram?: string }) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");

  const id = (name: string) => `${uid}-${name}`;
  const req = (name: keyof InterestSubmission) => requiredInterestFields.includes(name);
  const a11y = (name: keyof InterestSubmission) => ({
    id: id(name),
    name,
    required: req(name),
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id(name)}-error` : undefined,
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const { data, errors: v, valid } = validateInterest(raw);
    setErrors(v);
    if (!valid) {
      const first = Object.keys(v)[0];
      document.getElementById(id(first))?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        if (json.errors) setErrors(json.errors);
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }

      let emailResponse: Response;
      try {
        emailResponse = await fetch(formSubmitEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(buildInterestEmail(data, new Date().toISOString())),
        });
      } catch {
        throw new Error("Something went wrong. Please try again.");
      }
      const emailJson = await emailResponse.json().catch(() => null);
      if (!emailResponse.ok || !isFormSubmitSuccess(emailJson)) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-6 border border-white/10 bg-char p-8 sm:p-12">
        <CrestBadge className="h-14 w-14" title="" />
        <h3 className="font-display text-5xl sm:text-6xl">You&rsquo;re on the list.</h3>
        <p className="max-w-md text-lg text-mist">
          We&rsquo;ll be in touch with Vanta FC updates and upcoming opportunities.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-8 gap-y-10 border border-white/10 bg-char p-6 sm:grid-cols-2 sm:p-10">
      <Field id={id("parentName")} label="Parent / Guardian name" required error={errors.parentName}>
        <input {...a11y("parentName")} type="text" autoComplete="name" className={inputClass} />
      </Field>
      <Field id={id("email")} label="Email" required error={errors.email}>
        <input {...a11y("email")} type="email" autoComplete="email" inputMode="email" className={inputClass} />
      </Field>
      <Field id={id("phone")} label="Phone" error={errors.phone}>
        <input {...a11y("phone")} type="tel" autoComplete="tel" inputMode="tel" className={inputClass} />
      </Field>
      <Field id={id("playerName")} label="Player name" required error={errors.playerName}>
        <input {...a11y("playerName")} type="text" autoComplete="off" className={inputClass} />
      </Field>
      <Field id={id("playerAge")} label={`Player age (${playerAges.label})`} required error={errors.playerAge}>
        <input {...a11y("playerAge")} type="number" min={playerAges.min} max={playerAges.max} step={1} inputMode="numeric" className={inputClass} />
      </Field>
      <Field id={id("experience")} label="Soccer experience" error={errors.experience}>
        <select {...a11y("experience")} defaultValue="" className={`${inputClass} appearance-none`}>
          <option value="" disabled className="bg-char">Select</option>
          {experienceOptions.map((o) => (
            <option key={o} value={o} className="bg-char">{o}</option>
          ))}
        </select>
      </Field>
      <Field id={id("program")} label="Program interested in" error={errors.program} className="sm:col-span-2">
        <select {...a11y("program")} defaultValue={programFormOptions.includes(defaultProgram) ? defaultProgram : ""} className={`${inputClass} appearance-none`}>
          <option value="" disabled className="bg-char">Select a program</option>
          {programFormOptions.map((o) => (
            <option key={o} value={o} className="bg-char">{o}</option>
          ))}
        </select>
      </Field>
      <Field id={id("message")} label="Message" error={errors.message} className="sm:col-span-2">
        <textarea {...a11y("message")} rows={3} className={`${inputClass} resize-y`} placeholder="Anything we should know?" />
      </Field>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-steel">
          <span className="text-accent">*</span> Required. We&rsquo;ll only use this to contact you about Vanta FC.
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "Sending…" : "Join the Vanta FC interest list"}
        </Button>
      </div>
      {status === "error" && (
        <p role="alert" className="text-red-300 sm:col-span-2">{message}</p>
      )}
    </form>
  );
}
