import { Container, Section } from "@/components/container";
import { InterestForm } from "@/components/interest-form";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Join Vanta FC",
  description:
    "Join the Vanta FC interest list. Be the first to know about youth soccer programs, registration, clinics, and camps at Davis Park, St. Johns County.",
  path: "/join",
});

export default async function JoinPage({ searchParams }: { searchParams: Promise<{ program?: string }> }) {
  const { program } = await searchParams;
  return (
    <Section className="pt-36! sm:pt-44!">
      <Container className="grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6 flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            <span className="size-1.5 rotate-45 bg-current" aria-hidden="true" />
            Join Vanta
          </p>
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl">Ready to join Vanta?</h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-mist">
            Be the first to know about programs, registration, clinics, camps, and upcoming Vanta FC opportunities.
          </p>
          <ul className="mt-10 space-y-4 border-t border-white/10 pt-8 text-mist">
            <li className="flex gap-4"><span className="text-accent">01</span> Join the interest list.</li>
            <li className="flex gap-4"><span className="text-accent">02</span> Get program details and dates first.</li>
            <li className="flex gap-4"><span className="text-accent">03</span> Register when programs open.</li>
          </ul>
          <p className="eyebrow mt-10 text-steel">{site.location.short}</p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <InterestForm defaultProgram={program} />
        </Reveal>
      </Container>
    </Section>
  );
}
