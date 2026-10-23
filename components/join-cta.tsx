import Image from "next/image";
import type { ReactNode } from "react";
import { bookHref, joinHref } from "@/lib/site";
import { ButtonLink } from "./button";
import { Container } from "./container";
import { Mark } from "./mark";
import { Reveal } from "./reveal";

export function JoinCta({
  title = <>Ready to <Mark>join Vanta</Mark>?</>,
  body = "Be the first to know about programs, registration, clinics, camps, and upcoming Vanta FC opportunities.",
}: {
  title?: ReactNode;
  body?: string;
}) {
  return (
    <section className="grain relative isolate overflow-hidden bg-chalk py-28 text-ink sm:py-36">
      <Image
        src="/images/hero-night-training.jpg"
        alt=""
        fill
        sizes="100vw"
        className="photo-mono -z-10 object-cover opacity-[0.08]"
      />
      <Container>
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6 text-ink/60">Join the interest list</p>
          <h2 className="font-display text-6xl text-balance sm:text-7xl lg:text-8xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-graphite">{body}</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href={joinHref} variant="dark" size="lg">Join Vanta</ButtonLink>
            <ButtonLink href={bookHref} variant="secondary" size="lg" className="border-ink/30! text-ink! hover:bg-ink! hover:text-chalk!">
              Book a session
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
