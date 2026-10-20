import { ButtonLink } from "@/components/button";
import { Container, Section } from "@/components/container";
import { EventCard } from "@/components/event-card";
import { JoinCta } from "@/components/join-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { events, plannedEventTypes } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { joinHref } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Events",
  description:
    "Upcoming Vanta FC youth soccer clinics, camps, training sessions, and events at Davis Park, St. Johns County. Events are coming soon.",
  path: "/events",
  image: "/images/training-balls.jpg",
});

export default function EventsPage() {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Upcoming events."
        intro="Clinics, camps, training sessions, 3v3 events, tournaments, and tryouts will be listed here as they're announced."
        image={{ src: "/images/training-balls.jpg", alt: "Soccer balls gathered on a training field" }}
      />
      <Section tone="coal">
        <Container>
          {upcoming.length > 0 ? (
            <div className="space-y-4">
              {upcoming.map((event, i) => (
                <Reveal key={event.slug} delay={i * 60}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="border border-white/10 bg-ink p-8 sm:p-14 lg:p-20">
              <p className="eyebrow text-accent">Nothing announced yet</p>
              <h2 className="mt-6 max-w-4xl font-display text-5xl sm:text-7xl">Vanta FC events are coming soon.</h2>
              <p className="mt-6 max-w-xl text-lg text-mist">
                Join the interest list and you&rsquo;ll be the first to know when dates are announced.
              </p>
              <ButtonLink href={joinHref} size="lg" className="mt-10">Join the interest list</ButtonLink>

              <p className="eyebrow mt-16 text-steel">What to expect</p>
              <ul className="event-expectations mt-6 grid sm:grid-cols-2 lg:grid-cols-4">
                {plannedEventTypes.map((t) => (
                  <li key={t.type} className="bg-ink p-6">
                    <p className="font-display text-2xl">{t.type}</p>
                    <p className="mt-2 text-sm text-mist">{t.blurb}</p>
                    <p className="mt-4 text-[0.6rem] font-semibold tracking-[0.2em] text-steel uppercase">Coming soon</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </Container>
      </Section>
      <JoinCta />
    </>
  );
}
