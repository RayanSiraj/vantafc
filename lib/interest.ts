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
  if (data.playerAge && (!Number.isFinite(age) || age < 3 || age > 18)) errors.playerAge = "Enter an age between 3 and 18";
  return { data, errors, valid: Object.keys(errors).length === 0 };
}
