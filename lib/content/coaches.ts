import type { ImageRef } from "./types";

export type StaffRole =
  | "Technical Director"
  | "Head Coach"
  | "Academy Coach"
  | "Guest Coach";

export type Coach = {
  slug: string;
  name: string;
  role: StaffRole;
  bio?: string;
  /** Only list credentials that are verified. */
  credentials?: string[];
  image?: ImageRef;
};

/** Add confirmed staff here. Empty roles render as "Coming soon" cards. */
export const coaches: Coach[] = [];

export const staffRoles: { role: StaffRole; blurb: string }[] = [
  { role: "Technical Director", blurb: "Leads the Vanta FC curriculum and coaching standard." },
  { role: "Head Coach", blurb: "Leads sessions and player development across age groups." },
  { role: "Academy Coach", blurb: "Delivers training within the Vanta development model." },
  { role: "Guest Coach", blurb: "Specialist sessions and clinics." },
];
