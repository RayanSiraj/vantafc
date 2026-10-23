import type { Metadata } from "next";
import { HomeHero } from "@/components/home/hero";
import { Intro } from "@/components/home/intro";
import { Marquee } from "@/components/home/marquee";
import { ProgramsPreview } from "@/components/home/programs-preview";
import { WhyVanta } from "@/components/home/why-vanta";
import { DavisPark } from "@/components/davis-park";
import { FutureVision } from "@/components/future-vision";
import { JoinCta } from "@/components/join-cta";
import { Parents } from "@/components/parents";
import { Pathway } from "@/components/pathway";
import { VantaStandard } from "@/components/vanta-standard";

export const metadata: Metadata = {
  title: { absolute: "Vanta FC | Youth Soccer in St. Johns County & Jacksonville" },
  description:
    "Vanta FC is a new youth soccer development organization at Davis Park in St. Johns County, FL. Purposeful training for ages 4–12 near Jacksonville, Nocatee, and Ponte Vedra.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <Intro />
      <VantaStandard />
      <ProgramsPreview />
      <Pathway />
      <WhyVanta />
      <DavisPark />
      <Parents />
      <FutureVision />
      <JoinCta />
    </>
  );
}
