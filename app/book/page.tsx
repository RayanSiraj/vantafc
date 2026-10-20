import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Container, Section } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { StatusBadge } from "@/components/status-badge";
import { programs } from "@/lib/content";
import { bookHref, joinHref, site } from "@/lib/site";
import { getBooking } from "@/lib/booking";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Session",
  description:
    "Book Vanta FC youth soccer training at Davis Park in St. Johns County, Florida: development sessions, small-group training, clinics, and private sessions.",
  path: bookHref,
});

export default function BookPage() {
  const { embedUrl, linkUrl } = getBooking();

  return (
    <Section className="pt-36! sm:pt-44!">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-6 flex items-center gap-3 text-accent">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              <span className="size-1.5 rotate-45 bg-current" aria-hidden="true" />
              Book a session
            </p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl">Book your session.</h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-mist">
              One calendar for every Vanta FC service. Pick a time and tell us which service you&rsquo;re booking.
            </p>
            <p className="eyebrow mt-8 text-steel">Services</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {programs.filter((program) => program.bookable).map((program) => (
                <li key={program.slug} className="border border-white/15 px-3 py-2 text-sm text-chalk">
                  {program.name}
                </li>
              ))}
              <li className="border border-white/15 px-3 py-2 text-sm text-chalk">Private Session</li>
            </ul>
            <ul className="mt-10 space-y-4 border-t border-white/10 pt-8 text-mist">
              <li className="flex gap-4"><span className="text-accent">01</span> Pick a time that works.</li>
              <li className="flex gap-4"><span className="text-accent">02</span> Tell us which service you&rsquo;re booking.</li>
              <li className="flex gap-4"><span className="text-accent">03</span> Meet us at Davis Park.</li>
            </ul>
            <p className="eyebrow mt-10 text-steel">{site.location.short}</p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            {embedUrl && linkUrl ? (
              <div>
                <div className="border border-ink/10 bg-chalk p-3 sm:p-5">
                  <iframe
                    title="Book a Vanta FC session"
                    src={embedUrl}
                    className="block w-full border-0"
                    style={{ height: 760 }}
                    loading="lazy"
                  />
                </div>
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-mist underline underline-offset-4 transition-colors hover:text-chalk"
                >
                  Trouble loading the calendar? Open the booking page
                </a>
              </div>
            ) : linkUrl ? (
              <div className="border border-white/10 bg-ink p-8 sm:p-10 lg:p-12">
                <p className="max-w-lg text-lg leading-relaxed text-mist">
                  Open the booking calendar to choose a time, then tell us which service you&rsquo;re booking.
                </p>
                <ButtonLink href={linkUrl} external size="lg" className="mt-8">
                  Open booking calendar
                </ButtonLink>
              </div>
            ) : (
              <div className="border border-white/10 bg-ink p-8 sm:p-10 lg:p-12">
                <StatusBadge status="coming-soon" />
                <h2 className="mt-6 font-display text-4xl sm:text-5xl">Session booking opens soon.</h2>
                <p className="mt-6 max-w-xl text-lg text-mist">
                  Join the interest list and we&rsquo;ll let you know as soon as booking is live.
                </p>
                <ButtonLink href={joinHref} size="lg" className="mt-8">
                  Join the interest list
                </ButtonLink>
              </div>
            )}
          </Reveal>
        </div>

        <p className="mt-14 text-sm text-steel">
          Looking for group training?{" "}
          <Link href="/programs" className="text-chalk underline underline-offset-4 transition-colors hover:text-accent">
            See all programs →
          </Link>
        </p>
      </Container>
    </Section>
  );
}
