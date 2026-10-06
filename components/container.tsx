import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "ink" | "coal" | "chalk";
  labelledBy?: string;
};

export function Section({ children, className = "", id, tone = "ink", labelledBy }: SectionProps) {
  const tones = {
    ink: "bg-ink text-chalk",
    coal: "bg-coal text-chalk",
    chalk: "bg-chalk text-ink",
  };
  return (
    <section id={id} aria-labelledby={labelledBy} className={`relative py-24 sm:py-32 lg:py-40 ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}
