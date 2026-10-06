import type { Availability } from "./types";

export type EventType =
  | "Clinic"
  | "Camp"
  | "Training"
  | "3v3"
  | "Tournament"
  | "Tryout"
  | "Registration deadline";

export type VantaEvent = {
  slug: string;
  type: EventType;
  name: string;
  /** ISO date, e.g. "2027-01-16". */
  date: string;
  /** Optional display time, e.g. "9:00–11:00 AM". */
  time?: string;
  ageGroup: string;
  location: string;
  description: string;
  availability: Availability;
  /** External or internal registration link. Falls back to the interest form. */
  registerHref?: string;
};

/**
 * Add officially announced events here. While this list is empty the Events
 * page shows the "Vanta FC events are coming soon." state.
 *
 * Example:
 * {
 *   slug: "finishing-clinic-jan",
 *   type: "Clinic",
 *   name: "Finishing Clinic",
 *   date: "2027-01-16",
 *   time: "9:00–10:30 AM",
 *   ageGroup: "Ages 9–12",
 *   location: "Davis Park",
 *   description: "Finishing technique, composure in front of goal, and repetition.",
 *   availability: "open",
 * }
 */
export const events: VantaEvent[] = [];

/** Event formats Vanta FC plans to host — shown while no events are announced. */
export const plannedEventTypes: { type: EventType; blurb: string }[] = [
  { type: "Clinic", blurb: "Skill-specific sessions." },
  { type: "Camp", blurb: "Seasonal and school-break soccer." },
  { type: "Training", blurb: "Open and program sessions." },
  { type: "3v3", blurb: "Small-sided events." },
  { type: "Tournament", blurb: "Competitive event days." },
  { type: "Tryout", blurb: "For future Vanta FC teams." },
  { type: "Registration deadline", blurb: "Key dates for families." },
];
