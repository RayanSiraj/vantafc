import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Vanta FC | Youth Soccer at Davis Park, St. Johns County",
    template: "%s | Vanta FC",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "St. Johns County youth soccer",
    "Jacksonville youth soccer",
    "Davis Park soccer",
    "youth soccer Nocatee",
    "youth soccer Ponte Vedra",
    "soccer training St. Johns County",
  ],
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/hero-night-training.jpg", width: 2200, height: 1467, alt: "Vanta FC training under the lights" }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink text-chalk">
        <JsonLd data={organizationJsonLd} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
