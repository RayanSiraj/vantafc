import Image from "next/image";
import { parentExpectations } from "@/lib/content";
import { Container, Section } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Parents() {
  return (
    <Section labelledBy="parents-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            className="lg:col-span-8"
            eyebrow="For families"
            title={<span id="parents-title">For players. For parents. For the community.</span>}
          />
          <Reveal delay={100} className="lg:col-span-4">
            <p className="text-lg text-mist">
              We take your child&rsquo;s development seriously. Here&rsquo;s what you can expect from Vanta FC.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          <Reveal className="relative min-h-80 overflow-hidden lg:col-span-4 lg:row-span-2">
            <Image src="/images/youth-match.jpg" alt="Young players competing in a match" fill sizes="(min-width: 1024px) 33vw, 100vw" className="photo-mono object-cover" />
          </Reveal>
          <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {parentExpectations.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 4) * 70} className="bg-ink p-6">
                <span className="block h-px w-6 bg-gold" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
