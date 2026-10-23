import Image from "next/image";
import { whyVanta } from "@/lib/content";
import { Container, Section } from "../container";
import { Mark } from "../mark";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

export function WhyVanta() {
  return (
    <Section tone="chalk" labelledBy="why-title">
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading tone="light" eyebrow="The difference" title={<span id="why-title">Why <Mark>Vanta</Mark>?</span>} />
          <Reveal delay={120} className="relative mt-12 hidden aspect-[4/5] overflow-hidden lg:block">
            <Image src="/images/dribble.jpg" alt="A young player dribbling the ball at speed" fill sizes="40vw" className="photo-mono object-cover" />
          </Reveal>
        </div>
        <ul className="grid gap-px self-start bg-ink/10 sm:grid-cols-2 lg:col-span-7">
          {whyVanta.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 90} className="bg-chalk p-8 sm:p-10">
              <span className="eyebrow text-ink/40">0{i + 1}</span>
              <h3 className="mt-6 font-display text-4xl">{item.title}</h3>
              <p className="mt-3 text-graphite">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
