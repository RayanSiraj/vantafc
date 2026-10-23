import { sessionDetails } from "../site";

export type Faq = { question: string; answer: string; includeInStructuredData?: boolean };

export const faqs: Faq[] = [
  {
    question: "What ages does Vanta FC serve?",
    answer:
      "Vanta FC is initially focused on players ages 4–12, with additional age groups planned as the organization grows.",
  },
  {
    question: "Where is Vanta FC located?",
    answer: "Vanta FC's home base is Davis Park in St. Johns County, Florida.",
  },
  {
    question: "Is Vanta FC recreational or competitive?",
    answer:
      "Vanta FC begins with development-focused programming and intends to expand into competitive teams and events.",
  },
  {
    question: "Does my child need soccer experience?",
    answer:
      "No. Programs are designed to be accessible to developing players while giving more experienced players the right level of challenge.",
  },
  {
    question: "How do I join?",
    answer:
      "Join the Vanta FC interest list. You'll be the first to hear about programs, registration, clinics, and camps. You can also contact us directly.",
  },
  {
    question: "What should my child bring?",
    answer:
      "Exact requirements will be shared with each program. Plan on athletic clothing, a water bottle, and appropriate soccer footwear. We'll confirm details before the first session.",
  },
  {
    question: "How much do programs cost?",
    answer: `Bookable sessions (Vanta Development, Small-Group Training, Vanta Clinics and Private Sessions) are ${sessionDetails.priceLabel}, and each session is ${sessionDetails.duration.replace(/\bhr\b/, "hour").replace(/\bmin\b/, "minutes")}. Pricing for camps, 3v3 and teams will be announced when those programs open.`,
    includeInStructuredData: false,
  },
];
