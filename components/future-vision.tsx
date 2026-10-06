import Image from "next/image";
import { futureVision } from "@/lib/content";
import { Container, Section } from "./container";
import { Reveal } from "./reveal";

export function FutureVision() {
  return (
    <Section labelledBy="future-title" className="grain isolate overflow-hidden">
      <Image src="/images/tunnel.jpg" alt="" fill sizes="100vw" className="photo-mono -z-10 object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/80 to-ink" aria-hidden="true" />
      <Container>
        <Reveal className="max-w-5xl">
          <p className="eyebrow mb-6 flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            The vision
          </p>
          <h2 id="future-title" className="font-display text-[clamp(3.5rem,11vw,10rem)]">
            This is just the beginning.
          </h2>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-mist">
            Vanta FC starts with youth development at Davis Park. The goal is a full soccer organization — built
            step by step, the right way.
          </p>
        </Reveal>
        <ul className="mt-16 flex flex-wrap gap-3">
          {futureVision.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 50}>
              <span className="inline-flex items-center gap-3 border border-white/15 bg-ink/60 px-5 py-3 backdrop-blur">
                <span className="font-display text-xl">{item}</span>
                <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-steel uppercase">Coming soon</span>
              </span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
