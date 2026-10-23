import Image from "next/image";
import { site } from "@/lib/site";
import { ButtonLink } from "./button";
import { Container, Section } from "./container";
import { CrestBadge } from "./crest";
import { Mark } from "./mark";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function DavisPark() {
  return (
    <Section tone="coal" labelledBy="home-field-title">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Home base"
            title={<span id="home-field-title">Find your <Mark>home field</Mark>.</span>}
            intro={
              <>
                <p>
                  Davis Park in St. Johns County is the home of Vanta FC. It&rsquo;s where our players train,
                  compete, and grow — and where the club begins.
                </p>
                <p className="mt-4">Serving families from Jacksonville, Nocatee, Ponte Vedra, and across St. Johns County.</p>
              </>
            }
          />
          <Reveal delay={120} className="mt-10 border-t border-white/10 pt-8">
            <p className="font-display text-4xl">{site.location.venue}</p>
            <p className="eyebrow mt-3 text-steel">{site.location.region}</p>
            <ButtonLink href={site.location.directionsUrl} external className="mt-8">Get directions</ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative aspect-square overflow-hidden border border-white/10 bg-ink sm:aspect-[4/3] lg:aspect-square">
          <Image
            src="/images/pitch-aerial.jpg"
            alt="Aerial view of a soccer pitch's markings"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="photo-mono object-cover opacity-40"
          />
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-white/15" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="absolute h-56 w-56 animate-ping rounded-full border border-accent/30 [animation-duration:3s]" aria-hidden="true" />
            <span className="absolute h-32 w-32 rounded-full border border-accent/50" aria-hidden="true" />
            <div className="relative flex flex-col items-center gap-3 bg-ink/80 px-6 py-5 text-center backdrop-blur">
              <CrestBadge className="h-12 w-12" title="" />
              <p className="font-display text-2xl">Davis Park</p>
              <p className="eyebrow text-steel">Home of Vanta FC</p>
            </div>
          </div>
          <p className="eyebrow absolute bottom-5 left-5 text-steel">St. Johns County, FL</p>
          <p className="eyebrow absolute top-5 right-5 text-steel">N ↑</p>
        </Reveal>
      </Container>
    </Section>
  );
}
