import type { ReactNode } from "react";
import { Container, Section } from "./container";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Section className="pt-36! sm:pt-44!">
      <Container className="max-w-3xl">
        <p className="eyebrow text-gold">Legal</p>
        <h1 className="mt-6 font-display text-6xl sm:text-7xl">{title}</h1>
        <p className="mt-6 border border-gold/30 bg-gold/5 p-4 text-sm text-mist">
          Placeholder — this page will be finalized and reviewed before Vanta FC opens registration.
        </p>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-mist [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-chalk">
          {children}
        </div>
      </Container>
    </Section>
  );
}
