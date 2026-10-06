import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Heading = "h2",
  className = "",
  tone = "dark",
}: SectionHeadingProps) {
  const center = align === "center";
  const muted = tone === "dark" ? "text-mist" : "text-graphite";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-4xl ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-5 flex items-center gap-3 ${center ? "justify-center" : ""} ${tone === "dark" ? "text-gold" : "text-ink/60"}`}>
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Heading className="font-display text-5xl text-balance sm:text-6xl lg:text-7xl">{title}</Heading>
      {intro && <div className={`mt-6 max-w-2xl text-lg leading-relaxed ${muted} ${center ? "mx-auto" : ""}`}>{intro}</div>}
    </Reveal>
  );
}
