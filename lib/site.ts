export const site = {
  name: "Vanta FC",
  shortName: "VFC",
  tagline: "Built for the next generation.",
  description:
    "Vanta FC is a youth soccer development organization at Davis Park in St. Johns County, Florida, serving players ages 5–12 from Jacksonville, Nocatee, and Ponte Vedra.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vantafc.com",
  location: {
    venue: "Davis Park",
    region: "St. Johns County, Florida",
    short: "Davis Park • St. Johns County, Florida",
    areaServed: ["Jacksonville", "St. Johns County", "Nocatee", "Ponte Vedra"],
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Davis+Park+St.+Johns+County+Florida",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Davis+Park+St.+Johns+County+Florida&output=embed",
  },
  /** Google Calendar appointment schedule used for all bookable services. `url` is the public booking link (used for "open booking page" links). `embedSrc` is the full calendar.google.com/calendar/appointments/... URL (or iframe src) for the inline embed; `null` falls back to link-only. Both `null` renders "coming soon". */
  booking: {
    url: "https://calendar.app.google/v15xCR4KMLDAbnB76" as string | null,
    embedSrc: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ39DEfBbVWMBzf4xeHjjDjpm5NoB-N8GE-yxL8c3dQQ5cwWSD3-502HVeoVTp632GX8JsF6a2V1" as string | null,
  },
  email: "vanta.futbol@gmail.com",
  /** Interest-form submissions are emailed here via FormSubmit (formsubmit.co); the address must be activated once via FormSubmit's confirmation email. */
  forms: { notifyEmail: "vanta.futbol@gmail.com" },
  /** Add a URL to each network once the handle exists. `null` renders "Coming soon". */
  socials: [
    { label: "Instagram", href: null as string | null },
    { label: "TikTok", href: null as string | null },
    { label: "Facebook", href: null as string | null },
  ],
  copyrightYear: 2026,
};

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Development", href: "/development" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; links: NavItem[] }[] = [
  {
    heading: "Club",
    links: [
      { label: "About", href: "/about" },
      { label: "Coaches", href: "/coaches" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Play",
    links: [
      { label: "Programs", href: "/programs" },
      { label: "Book a Session", href: "/book" },
      { label: "Development", href: "/development" },
      { label: "Events", href: "/events" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export const joinHref = "/join";
export const bookHref = "/book";
