import { pillars } from "@/lib/content";
import { Container, Section } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function VantaStandard() {
  return (
    <Section tone="coal" labelledBy="standard-title" className="overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-10 right-0 font-display text-[40vw] leading-none text-white/[0.025] lg:text-[34rem]">
        VFC
      </div>
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="Our development environment" title={<span id="standard-title">The Vanta Standard</span>} />
          <Reveal delay={100}>
            <p className="max-w-md text-lg text-mist lg:ml-auto">
              Six pillars shape every session, every coach, and every player who trains with Vanta FC.
            </p>
          </Reveal>
        </div>
        <ol className="mt-16 grid border-t border-l border-white/10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={(i % 3) * 90}
              className="group relative flex min-h-80 flex-col justify-between overflow-hidden border-r border-b border-white/10 p-8 transition-colors duration-500 hover:bg-chalk hover:text-ink sm:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-7xl text-white/15 transition-colors duration-500 group-hover:text-ink/15">{p.number}</span>
                <span className="mt-3 h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-4xl sm:text-5xl">{p.title}</h3>
                <p className="mt-4 max-w-xs text-mist transition-colors duration-500 group-hover:text-graphite">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
