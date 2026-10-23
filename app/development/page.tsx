import { AgeGroups } from "@/components/age-groups";
import { ButtonLink } from "@/components/button";
import { JoinCta } from "@/components/join-cta";
import { Mark } from "@/components/mark";
import { PageHero } from "@/components/page-hero";
import { Pathway } from "@/components/pathway";
import { PlayerExperience } from "@/components/player-experience";
import { VantaStandard } from "@/components/vanta-standard";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Player Development",
  description:
    "The Vanta FC player development model: the Vanta Standard, the Discover → Develop → Compete → Lead pathway, and age groups for youth soccer players 4–12 in St. Johns County.",
  path: "/development",
  image: "/images/ball-control.jpg",
});

export default function DevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Player development"
        title={<>Develop. Compete. <Mark>Lead</Mark>.</>}
        intro="Every Vanta session has a purpose. This is how we develop players — technically, mentally, physically, and socially."
        image={{ src: "/images/first-touch.jpg", alt: "A player taking a first touch on the ball" }}
      >
        <ButtonLink href="#pathway" variant="secondary" size="lg">See the pathway</ButtonLink>
      </PageHero>
      <VantaStandard />
      <div id="pathway" className="scroll-mt-16">
        <Pathway />
      </div>
      <AgeGroups />
      <PlayerExperience />
      <JoinCta />
    </>
  );
}
