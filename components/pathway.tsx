import Image from "next/image";
import { pathway } from "@/lib/content";
import { Container, Section } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Pathway() {
  return (
    <Section labelledBy="pathway-title" className="grain isolate overflow-hidden">
      <Image src="/images/pitch-aerial.jpg" alt="" fill sizes="100vw" className="photo-mono -z-10 object-cover opacity-15" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/70 to-ink" aria-hidden="true" />
      <Container>
        <SectionHeading
          eyebrow="Player development"
          title={<span id="pathway-title">The Vanta Pathway</span>}
          intro="A player can grow with Vanta FC over years, not weeks. Every stage builds on the last."
        />
        <ol className="relative mt-20 grid gap-0 lg:mt-28 lg:grid-cols-4">
          <div aria-hidden="true" className="absolute top-[2.15rem] right-0 left-0 hidden h-px bg-gradient-to-r from-white/40 via-accent to-white/10 lg:block" />
          {pathway.map((p, i) => (
            <Reveal
              as="li"
              key={p.step}
              delay={i * 140}
              className="relative border-l border-white/15 pb-12 pl-8 lg:border-l-0 lg:pl-0 lg:pr-8"
            >
              <span
                aria-hidden="true"
                className="absolute top-6 -left-[0.4rem] flex h-3 w-3 rotate-45 border border-accent bg-ink lg:static lg:mb-0 lg:ml-0"
              />
              <p className="eyebrow mt-0 text-steel lg:mt-8">Stage 0{i + 1}</p>
              <h3 className="mt-3 flex items-center gap-4 font-display text-6xl sm:text-7xl">
                {p.step}
                {i < pathway.length - 1 && <span aria-hidden="true" className="hidden text-4xl text-accent lg:inline">→</span>}
              </h3>
              <p className="mt-4 max-w-xs text-lg text-mist">{p.body}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-8 flex items-center gap-4 text-sm text-steel">
          <span className="h-px w-12 bg-white/20" aria-hidden="true" />
          Ages 5 → 12 and beyond
        </Reveal>
      </Container>
    </Section>
  );
}
