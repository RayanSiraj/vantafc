import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { Container, Section } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { StatusBadge } from "@/components/status-badge";
import { bookHref, joinHref, site } from "@/lib/site";
import { bookingServices, bookServiceHref, getBooking } from "@/lib/booking";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Session",
  description:
    "Book Vanta FC youth soccer training at Davis Park in St. Johns County, Florida: development sessions, small-group training, clinics, and private sessions.",
  path: bookHref,
});

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const { service } = await searchParams;
  const selected = typeof service === "string" ? bookingServices.find((item) => item.slug === service) : undefined;
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
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl">
              {selected ? `Book ${selected.name}.` : "Book your session."}
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-mist">
              One calendar for every Vanta FC service. Pick a time and tell us which service you&rsquo;re booking.
            </p>
            <p className="eyebrow mt-8 text-steel">Services</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {bookingServices.map((item) => {
                const isSelected = selected?.slug === item.slug;
                return (
                  <li key={item.slug}>
                    <Link
                      href={bookServiceHref(item.slug)}
                      scroll={false}
                      aria-current={isSelected ? "true" : undefined}
                      className={`inline-flex items-center border px-3 py-2 text-sm transition-colors ${
                        isSelected
                          ? "border-accent text-accent"
                          : "border-white/15 text-chalk hover:border-accent hover:text-accent"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="mt-10 space-y-4 border-t border-white/10 pt-8 text-mist">
              <li className="flex gap-4"><span className="text-accent">01</span> Pick a time that works.</li>
              <li className="flex gap-4"><span className="text-accent">02</span> Tell us which service you&rsquo;re booking.</li>
              <li className="flex gap-4"><span className="text-accent">03</span> Meet us at Davis Park.</li>
            </ul>
            <p className="eyebrow mt-10 text-steel">{site.location.short}</p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            {selected && (
              <div className="mb-4 border border-white/10 bg-char p-4 sm:p-5">
                <p className="eyebrow text-accent">Booking: {selected.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  Pick a time, then enter &ldquo;{selected.bookingLabel}&rdquo; in the Service field.
                </p>
              </div>
            )}
            {embedUrl && linkUrl ? (
              <div>
                <div className="-mx-5 border-0 bg-chalk p-0 sm:mx-0 sm:border sm:p-3 lg:p-5">
                  <iframe
                    title="Book a Vanta FC session"
                    src={embedUrl}
                    className="block h-[1000px] w-full border-0 sm:h-[760px]"
                    loading="lazy"
                  />
                </div>
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block min-h-8 py-1.5 -mb-1.5 text-sm text-mist underline underline-offset-4 transition-colors hover:text-chalk"
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
          <Link href="/programs" className="inline-block py-1.5 -my-1.5 text-chalk underline underline-offset-4 transition-colors hover:text-accent">
            See all programs →
          </Link>
        </p>
      </Container>
    </Section>
  );
}
