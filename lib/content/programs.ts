import type { Availability, ImageRef } from "./types";

export type Program = {
  slug: string;
  name: string;
  ages?: string;
  summary: string;
  description: string;
  focus?: string[];
  bookable?: boolean;
  availability: Availability;
  image: ImageRef;
  /** Value sent with the interest form so families can pick this program. */
  formValue: string;
};

export const programs: Program[] = [
  {
    slug: "development",
    name: "Vanta Development",
    ages: "Ages 5–12",
    summary: "The foundation of Vanta FC.",
    description:
      "Structured sessions built around technical development, confidence, decision-making, and enjoyment of the game.",
    focus: ["Technical development", "Confidence", "Decision-making", "Enjoyment"],
    bookable: true,
    availability: "interest",
    image: {
      src: "/images/youth-match.jpg",
      alt: "Young soccer players competing for the ball in front of goal",
    },
    formValue: "Vanta Development",
  },
  {
    slug: "small-group",
    name: "Small-Group Training",
    summary: "More reps. More focus.",
    description:
      "More individualized development with additional repetition and focused coaching in a smaller group.",
    focus: ["Ball mastery", "First touch", "1v1", "Passing", "Finishing", "Decision-making"],
    bookable: true,
    availability: "interest",
    image: {
      src: "/images/ball-control.jpg",
      alt: "Close-up of a player's boot controlling a soccer ball on grass",
    },
    formValue: "Small-Group Training",
  },
  {
    slug: "clinics",
    name: "Vanta Clinics",
    summary: "One skill. Fully sharpened.",
    description: "Focused training sessions built around a specific skill.",
    focus: ["Finishing", "Dribbling", "First touch", "1v1", "Passing", "Speed & agility"],
    bookable: true,
    availability: "interest",
    image: {
      src: "/images/strike-closeup.jpg",
      alt: "Close-up of a player striking a soccer ball",
    },
    formValue: "Vanta Clinics",
  },
  {
    slug: "camps",
    name: "Vanta Camps",
    summary: "Seasonal and school-break soccer.",
    description:
      "Seasonal and school-break soccer experiences combining development, competition, and fun.",
    availability: "coming-soon",
    image: {
      src: "/images/training-balls.jpg",
      alt: "A cluster of soccer balls on a training pitch",
    },
    formValue: "Vanta Camps",
  },
  {
    slug: "small-sided",
    name: "3v3 / Small-Sided",
    summary: "Fast games. Constant touches.",
    description:
      "Fast-paced small-sided soccer designed to maximize touches, decisions, creativity, and competition.",
    availability: "coming-soon",
    image: {
      src: "/images/one-v-one.jpg",
      alt: "Two players battling for the ball in a 1v1 duel",
    },
    formValue: "3v3 / Small-Sided",
  },
  {
    slug: "teams",
    name: "Vanta FC Teams",
    summary: "The next step.",
    description:
      "Future competitive teams organized by age group. Vanta FC teams have not been formed yet.",
    availability: "coming-soon",
    image: {
      src: "/images/tunnel.jpg",
      alt: "A stadium players' tunnel leading out toward the pitch",
    },
    formValue: "Vanta FC Teams (future)",
  },
];

export const programFormOptions = [
  ...programs.map((p) => p.formValue),
  "Not sure yet",
];
