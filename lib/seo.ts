import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = { title: string; description: string; path: string; image?: string };

export function pageMetadata({ title, description, path, image = "/images/hero-night-training.jpg" }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: image, width: 1600, height: 1067, alt: `${site.name} youth soccer` }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [image] },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: site.name,
  alternateName: site.shortName,
  sport: "Soccer",
  url: site.url,
  logo: `${site.url}/icon.svg`,
  description: site.description,
  location: {
    "@type": "Place",
    name: site.location.venue,
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
      addressLocality: "St. Johns County",
    },
  },
  areaServed: site.location.areaServed.map((name) => ({ "@type": "Place", name: `${name}, Florida` })),
};
