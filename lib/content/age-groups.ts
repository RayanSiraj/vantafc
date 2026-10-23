export type AgeGroup = {
  ages: string;
  /** Future team label(s), e.g. U6. Used when teams launch. */
  bands: string[];
  stage: string;
  description: string;
};

/** Conceptual age groups — edit as programs are finalized. */
export const ageGroups: AgeGroup[] = [
  {
    ages: "4–6",
    bands: ["U5", "U6", "U7"],
    stage: "Discover",
    description: "Introduction to soccer, movement, coordination, and basic ball skills.",
  },
  {
    ages: "7–8",
    bands: ["U8", "U9"],
    stage: "Foundation",
    description: "Technical fundamentals, confidence, and basic decision-making.",
  },
  {
    ages: "9–10",
    bands: ["U10", "U11"],
    stage: "Development",
    description: "Technical development, game understanding, and small-sided competition.",
  },
  {
    ages: "11–12",
    bands: ["U12", "U13"],
    stage: "Advancement",
    description:
      "More advanced technical and tactical development, and preparation for competition.",
  },
];
