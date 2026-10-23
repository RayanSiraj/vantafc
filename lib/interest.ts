import { playerAges, site } from "./site";

export type InterestSubmission = {
  parentName: string;
  email: string;
  phone: string;
  playerName: string;
  playerAge: string;
  experience: string;
  program: string;
  message: string;
};

export const formSubmitEndpoint = `https://formsubmit.co/ajax/${site.forms.notifyEmail}`;

export function buildInterestEmail(data: InterestSubmission, submittedAt: string) {
  return {
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
    "Submitted at": submittedAt,
  };
}

export function isFormSubmitSuccess(json: unknown): boolean {
  if (json === null || typeof json !== "object" || Array.isArray(json)) return false;
  const success = (json as { success?: unknown }).success;
  return success === "true" || success === true;
}

export const interestFields: (keyof InterestSubmission)[] = [
  "parentName",
  "email",
  "phone",
  "playerName",
  "playerAge",
  "experience",
  "program",
  "message",
];

export const requiredInterestFields: (keyof InterestSubmission)[] = [
  "parentName",
  "email",
  "playerName",
  "playerAge",
];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInterest(input: Partial<Record<keyof InterestSubmission, unknown>>) {
  const data = {} as InterestSubmission;
  const errors: Partial<Record<keyof InterestSubmission, string>> = {};
  for (const field of interestFields) {
    const value = input[field];
    data[field] = typeof value === "string" ? value.trim().slice(0, 2000) : "";
  }
  for (const field of requiredInterestFields) {
    if (!data[field]) errors[field] = "Required";
  }
  if (data.email && !EMAIL.test(data.email)) errors.email = "Enter a valid email";
  const age = Number(data.playerAge);
  if (
    data.playerAge &&
    (!Number.isInteger(age) || age < playerAges.min || age > playerAges.max)
  ) {
    errors.playerAge = `Enter an age between ${playerAges.min} and ${playerAges.max}`;
  }
  return { data, errors, valid: Object.keys(errors).length === 0 };
}
