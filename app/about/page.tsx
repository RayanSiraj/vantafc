import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { Container, Section } from "@/components/container";
import { FutureVision } from "@/components/future-vision";
import { JoinCta } from "@/components/join-cta";
import { Mark } from "@/components/mark";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { values } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Vanta FC",
  description:
    "Vanta FC is a new youth soccer organization at Davis Park in St. Johns County, Florida. Our story, mission, vision, and values.",
  path: "/about",
  image: "/images/park-field.jpg",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Vanta FC"
        title={<>We’re <Mark>building something</Mark>.</>}
        intro="A new youth soccer organization in St. Johns County, with serious standards and a long-term vision."
        image={{ src: "/images/park-field.jpg", alt: "An open soccer field framed by trees" }}
      />

      <Section labelledBy="story-title">
        <Container className="grid gap-14 lg:grid-cols-12">
          <SectionHeading className="lg:col-span-5" eyebrow="Our story" title={<span id="story-title">Why Vanta <Mark>exists</Mark>.</span>} />
          <Reveal delay={100} className="space-y-6 text-xl leading-relaxed text-mist lg:col-span-7">
            <p>
              Young players deserve more than a place to play. They deserve an environment where they can develop,
              compete, make mistakes, and build real confidence.
            </p>
            <p>
              Vanta FC was created to be that environment — a place that balances development, competition, and
              community, and takes every player&rsquo;s growth seriously.
            </p>
            <p className="text-chalk">We&rsquo;re starting at Davis Park. We&rsquo;re starting focused. And we&rsquo;re building for the long term.</p>
          </Reveal>
        </Container>
      </Section>

      <section className="grid bg-chalk text-ink lg:grid-cols-2">
        <Reveal className="border-b border-ink/10 p-10 sm:p-16 lg:border-r lg:border-b-0 lg:p-24">
          <p className="eyebrow text-ink/50">Our mission</p>
          <h2 className="mt-6 font-display text-5xl max-[359px]:text-4xl sm:text-6xl">
            Develop skills, confidence, character, and a <Mark>love for soccer</Mark>.
          </h2>
          <p className="mt-6 max-w-md text-lg text-graphite">
            To create an environment where young players develop their skills, confidence, character, and love for
            soccer.
          </p>
        </Reveal>
        <Reveal delay={100} className="p-10 sm:p-16 lg:p-24">
          <p className="eyebrow text-ink/50">Our vision</p>
          <h2 className="mt-6 font-display text-5xl max-[359px]:text-4xl sm:text-6xl">A <Mark>trusted home</Mark> for the game in Northeast Florida.</h2>
          <p className="mt-6 max-w-md text-lg text-graphite">
            To build a soccer organization that becomes a trusted home for player development and competition in
            Northeast Florida.
          </p>
        </Reveal>
      </section>

      <Section tone="coal" labelledBy="values-title">
        <Container>
          <SectionHeading eyebrow="Our values" title={<span id="values-title">What we <Mark>stand for</Mark>.</span>} />
          <ul className="mt-16 grid border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={(i % 4) * 80} className="border-r border-b border-white/10 p-8">
                <span className="eyebrow text-steel">0{i + 1}</span>
                <h3 className="mt-8 font-display text-4xl">{v.title}</h3>
                <p className="mt-3 text-mist">{v.body}</p>
              </Reveal>
            ))}
            <Reveal as="li" delay={300} className="relative min-h-56 overflow-hidden border-r border-b border-white/10">
              <Image src="/images/training-balls.jpg" alt="Soccer balls ready for training" fill sizes="25vw" className="photo-mono object-cover opacity-60" />
            </Reveal>
          </ul>
        </Container>
      </Section>

      <FutureVision />

      <Section tone="coal">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <SectionHeading eyebrow="The people" title="Meet the Vanta FC staff." />
          <ButtonLink href="/coaches" variant="secondary" size="lg">View coaching staff</ButtonLink>
        </Container>
      </Section>

      <JoinCta />
    </>
  );
}
