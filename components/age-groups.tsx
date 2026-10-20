import { ageGroups } from "@/lib/content";
import { Container, Section } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function AgeGroups() {
  return (
    <Section tone="coal" labelledBy="ages-title">
      <Container>
        <SectionHeading
          eyebrow="Age groups"
          title={<span id="ages-title">Every age. The right challenge.</span>}
          intro="Our initial focus is players ages 5–12. Groups below are a framework and will be finalized as programs launch."
        />
        <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ageGroups.map((g, i) => (
            <Reveal
              as="li"
              key={g.ages}
              delay={i * 90}
              className="group flex min-h-96 flex-col justify-between border border-white/10 bg-ink p-8 transition-colors duration-500 hover:border-accent/60"
            >
              <div>
                <p className="eyebrow text-steel">Ages</p>
                <p className="mt-2 font-display text-8xl leading-none">{g.ages}</p>
              </div>
              <div>
                <div className="mb-6 h-1 w-full bg-white/10">
                  <div className="h-full bg-accent transition-all duration-700" style={{ width: `${((i + 1) / ageGroups.length) * 100}%` }} />
                </div>
                <h3 className="font-display text-4xl">{g.stage}</h3>
                <p className="mt-3 text-mist">{g.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
