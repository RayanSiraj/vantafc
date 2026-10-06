import Image from "next/image";
import { ButtonLink } from "../button";
import { Container } from "../container";
import { joinHref, site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pt-28 pb-14 sm:pb-20 lg:pb-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-night-training.jpg"
          alt="Youth soccer players training on a floodlit field at night"
          fill
          priority
          sizes="100vw"
          className="photo-mono animate-hero-zoom object-cover object-[50%_35%] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      <Container>
        <p className="eyebrow animate-rise flex items-center gap-3 text-chalk/80">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          {site.location.venue} • {site.location.region}
        </p>
        <h1 className="animate-rise mt-6 max-w-6xl font-display text-[clamp(3.6rem,13vw,11.5rem)] [animation-delay:100ms]">
          Built for the next generation<span className="text-gold">.</span>
        </h1>
        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:items-end">
          <p className="animate-rise max-w-xl text-lg leading-relaxed text-mist [animation-delay:220ms] sm:text-xl lg:col-span-6">
            Vanta FC is a youth soccer development organization built to help young players grow through
            purposeful training, competition, and a love for the game.
          </p>
          <div className="animate-rise flex flex-col gap-4 [animation-delay:320ms] sm:flex-row lg:col-span-6 lg:justify-end">
            <ButtonLink href={joinHref} size="lg">Join Vanta</ButtonLink>
            <ButtonLink href="/programs" variant="secondary" size="lg">Explore programs</ButtonLink>
          </div>
        </div>
      </Container>

      <div className="absolute right-6 bottom-8 hidden flex-col items-center gap-3 lg:flex" aria-hidden="true">
        <span className="eyebrow [writing-mode:vertical-rl] text-steel">Scroll</span>
        <span className="block h-14 w-px overflow-hidden bg-white/15">
          <span className="animate-scroll-cue block h-full w-px bg-chalk" />
        </span>
      </div>
    </section>
  );
}
