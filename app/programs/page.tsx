import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { Container, Section } from "@/components/container";
import { JoinCta } from "@/components/join-cta";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { programs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { bookHref, joinHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Youth Soccer Programs",
  description:
    "Vanta FC youth soccer programs at Davis Park, St. Johns County: development sessions for ages 5–12, small-group training, and skill clinics. Camps, 3v3, and teams coming soon.",
  path: "/programs",
  image: "/images/youth-match.jpg",
});

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Play with purpose."
        intro="Vanta FC starts with focused development for players ages 5–12 at Davis Park. More programs will follow as the club grows."
        image={{ src: "/images/one-v-one.jpg", alt: "Two young players competing for the ball" }}
      >
        <ButtonLink href={joinHref} size="lg">Register interest</ButtonLink>
      </PageHero>

      <Section tone="coal">
        <Container>
          <SectionHeading eyebrow="All programs" title="Choose your path." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, i) => (
              <Reveal key={program.slug} delay={(i % 3) * 90}>
                <ProgramCard program={program} index={i} href={`#${program.slug}`} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <section aria-label="Program details" className="bg-ink">
        {programs.map((program, i) => (
          <article
            key={program.slug}
            id={program.slug}
            className="scroll-mt-20 border-t border-white/10 py-20 sm:py-28"
          >
            <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <Reveal className={`relative aspect-[4/3] overflow-hidden lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
                <Image
                  src={program.image.src}
                  alt={program.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`photo-mono object-cover ${program.availability === "coming-soon" ? "opacity-50" : ""}`}
                />
                <span className="absolute top-5 left-5 font-display text-5xl text-white/70">{String(i + 1).padStart(2, "0")}</span>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-6 lg:px-8">
                <StatusBadge status={program.availability} />
                {program.ages && <p className="eyebrow mt-6 text-gold">{program.ages}</p>}
                <h2 className="mt-4 font-display text-6xl sm:text-7xl">{program.name}</h2>
                <p className="mt-5 text-2xl text-chalk">{program.summary}</p>
                <p className="mt-4 max-w-lg text-lg text-mist">{program.description}</p>
                {program.focus && (
                  <>
                    <p className="eyebrow mt-8 text-steel">Focus areas</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {program.focus.map((f) => (
                        <li key={f} className="border border-white/15 px-3 py-2 text-sm text-chalk">{f}</li>
                      ))}
                    </ul>
                  </>
                )}
                <p className="mt-8 text-sm text-steel">
                  Schedule, pricing, and registration dates will be announced. Join the interest list to hear first.
                </p>
                <ButtonLink
                  href={`${joinHref}?program=${encodeURIComponent(program.formValue)}`}
                  className="mt-6"
                  variant={program.availability === "coming-soon" ? "secondary" : "primary"}
                >
                  {program.availability === "coming-soon" ? "Join the waitlist" : "Register interest"}
                </ButtonLink>
              </Reveal>
            </Container>
          </article>
        ))}
      </section>

      <Section tone="coal" className="py-20! sm:py-24!">
        <Container className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow="Private sessions"
            title="Book a private session."
            intro="One player. Focused coaching. At Davis Park."
            className="lg:col-span-8"
          />
          <ButtonLink href={bookHref} size="lg" className="lg:col-span-4 lg:justify-self-start">
            Book a session
          </ButtonLink>
        </Container>
      </Section>

      <JoinCta />
    </>
  );
}
