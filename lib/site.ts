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
  /** Set to a real address once it is live. `null` renders "Email coming soon". */
  email: null as string | null,
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
      { label: "Development", href: "/development" },
      { label: "Events", href: "/events" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

export const joinHref = "/join";
