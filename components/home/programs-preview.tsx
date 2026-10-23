import { programs } from "@/lib/content";
import { ButtonLink } from "../button";
import { Container, Section } from "../container";
import { Mark } from "../mark";
import { ProgramCard } from "../program-card";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function ProgramsPreview() {
  return (
    <Section labelledBy="programs-title">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Programs"
            title={<span id="programs-title">Play with <Mark>purpose</Mark>.</span>}
            intro="We're starting focused: development programs for ages 5–12. More is on the way."
          />
          <Reveal delay={100}>
            <ButtonLink href="/programs" variant="secondary">View programs</ButtonLink>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <Reveal key={program.slug} delay={(i % 3) * 90}>
              <ProgramCard program={program} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
