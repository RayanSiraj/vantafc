/**
 * Availability of a program or offering.
 * - "interest": being built now; families can register interest.
 * - "coming-soon": planned, not yet launched.
 * - "open": registration is live (set once real details are confirmed).
 */
export type Availability = "open" | "interest" | "coming-soon";

export type ImageRef = { src: string; alt: string };
