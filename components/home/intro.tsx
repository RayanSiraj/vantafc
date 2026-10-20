import Image from "next/image";
import { Container, Section } from "../container";
import { Reveal } from "../reveal";

const verbs = ["Think", "Compete", "Create", "Improve", "Work together"];

export function Intro() {
  return (
    <Section labelledBy="intro-title">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-5 flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              <span className="size-1.5 rotate-45 bg-current" aria-hidden="true" />
              Who we are
            </p>
            <h2 id="intro-title" className="font-display text-6xl sm:text-7xl lg:text-8xl">
              More than a place to play.
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-10 max-w-xl space-y-5 text-lg leading-relaxed text-mist">
            <p>
              Vanta FC exists to create an environment where young players develop their skills, confidence,
              character, and love for soccer.
            </p>
            <p className="text-chalk">Training isn&rsquo;t just drills. It&rsquo;s learning to:</p>
          </Reveal>
          <ul className="mt-6 border-t border-white/10">
            {verbs.map((v, i) => (
              <Reveal as="li" key={v} delay={i * 70} className="flex items-baseline justify-between border-b border-white/10 py-4">
                <span className="font-display text-4xl sm:text-5xl">{v}</span>
                <span className="eyebrow text-steel">0{i + 1}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={150} className="relative lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden lg:sticky lg:top-28">
            <Image
              src="/images/boots-and-ball.jpg"
              alt="Soccer boots resting against a ball on the grass"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="photo-mono object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-24">
              <p className="font-display text-3xl">Develop the player.<br />Build the person.<br />Love the game.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
