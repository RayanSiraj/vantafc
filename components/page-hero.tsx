import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "./container";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: { src: string; alt: string };
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, image, children }: PageHeroProps) {
  return (
    <section className="grain relative isolate flex min-h-[72svh] items-end overflow-hidden bg-ink pt-32 pb-16 sm:pb-20 lg:min-h-[78svh] lg:pb-24">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="photo-mono animate-hero-zoom object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        </div>
      )}
      <Container>
        <p className="eyebrow animate-rise mb-6 flex items-center gap-3 text-gold">
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="animate-rise font-display text-6xl text-balance [animation-delay:80ms] sm:text-7xl lg:text-[8.5rem]">{title}</h1>
        {intro && (
          <div className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-mist [animation-delay:160ms] sm:text-xl">{intro}</div>
        )}
        {children && <div className="animate-rise mt-10 [animation-delay:240ms]">{children}</div>}
      </Container>
    </section>
  );
}
