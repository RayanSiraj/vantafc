import { CoachCard } from "@/components/coach-card";
import { Container, Section } from "@/components/container";
import { JoinCta } from "@/components/join-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { coaches, staffRoles } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Coaching Staff",
  description: "Meet the Vanta FC coaching staff. Staff announcements are coming soon.",
  path: "/coaches",
});

export default function CoachesPage() {
  const openRoles = staffRoles.filter((r) => !coaches.some((c) => c.role === r.role));
  return (
    <>
      <PageHero
        eyebrow="Club staff"
        title="Meet the Vanta FC staff."
        intro="Coaching staff — coming soon. We’ll introduce the people behind Vanta FC as appointments are confirmed."
        image={{ src: "/images/player-striking.jpg", alt: "A player striking the ball" }}
      />
      <Section tone="coal">
        <Container>
          <SectionHeading eyebrow="Coaching staff" title={coaches.length ? "Our staff." : "Coming soon."} />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coaches.map((coach, i) => (
              <Reveal key={coach.slug} delay={(i % 4) * 80}>
                <CoachCard coach={coach} role={coach.role} />
              </Reveal>
            ))}
            {openRoles.map((r, i) => (
              <Reveal key={r.role} delay={((coaches.length + i) % 4) * 80}>
                <CoachCard role={r.role} blurb={r.blurb} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <JoinCta title="Interested in coaching?" body="Get in touch with Vanta FC through our contact page — we’d like to hear from you." />
    </>
  );
}
