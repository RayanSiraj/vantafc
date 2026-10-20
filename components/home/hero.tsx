import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../button";
import { Container } from "../container";
import { bookHref, joinHref, site } from "@/lib/site";

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

      <div
        className="pointer-events-none absolute top-1/2 right-[-16rem] z-0 hidden size-[56rem] -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.06] lg:flex"
        aria-hidden="true"
      >
        <span className="size-[42rem] rounded-full border border-white/[0.06]" />
      </div>

      <Container className="relative z-10">
        <p className="eyebrow animate-rise flex items-center gap-3 text-chalk/80">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          <span className="size-1.5 rotate-45 bg-accent" aria-hidden="true" />
          {site.location.venue} • {site.location.region}
        </p>
        <h1 className="animate-rise mt-6 max-w-6xl font-display text-[clamp(3.6rem,13vw,11.5rem)] [animation-delay:100ms]">
          Built for the next generation<span className="text-accent">.</span>
        </h1>
        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:items-end">
          <p className="animate-rise max-w-xl text-lg leading-relaxed text-mist [animation-delay:220ms] sm:text-xl lg:col-span-6">
            Vanta FC is a youth soccer development organization built to help young players grow through
            purposeful training, competition, and a love for the game.
          </p>
          <div className="animate-rise [animation-delay:320ms] lg:col-span-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
              <ButtonLink href={joinHref} size="lg">Join Vanta</ButtonLink>
              <ButtonLink href={bookHref} variant="secondary" size="lg">Book a session</ButtonLink>
            </div>
            <p className="mt-5 sm:text-right">
              <Link
                href="/programs"
                className="group eyebrow inline-flex items-center gap-2 py-1.5 -my-1.5 text-chalk transition-colors hover:text-accent"
              >
                Explore programs
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </p>
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
