import { ButtonLink } from "@/components/button";
import { Container, Section } from "@/components/container";
import { Mark } from "@/components/mark";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { pageMetadata } from "@/lib/seo";
import { joinHref, site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Contact Vanta FC, a youth soccer organization at Davis Park in St. Johns County, Florida.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Get in <Mark>touch</Mark>.</>} intro="Questions about Vanta FC? We'd like to hear from you." />
      <Section tone="coal" className="pt-16! sm:pt-20!">
        <Container className="grid gap-4 lg:grid-cols-3">
          <Reveal className="border border-white/10 bg-ink p-8 sm:p-10">
            <p className="eyebrow text-accent">Club</p>
            <p className="mt-6 font-display text-5xl">Vanta FC</p>
            <address className="mt-4 text-lg leading-relaxed text-mist not-italic">
              {site.location.venue}
              <br />
              {site.location.region}
            </address>
            <ButtonLink href={site.location.directionsUrl} external variant="secondary" className="mt-8">Get directions</ButtonLink>
          </Reveal>
          <Reveal delay={90} className="border border-white/10 bg-ink p-8 sm:p-10">
            <p className="eyebrow text-accent">Email</p>
            {site.email ? (
              <a href={`mailto:${site.email}`} className="mt-6 block font-display text-4xl break-all hover:text-accent">{site.email}</a>
            ) : (
              <p className="mt-6 font-display text-4xl text-mist">Email coming soon</p>
            )}
            <p className="mt-4 text-mist">In the meantime, join the interest list and we&rsquo;ll reach out to you.</p>
            <ButtonLink href={joinHref} className="mt-8">Join Vanta</ButtonLink>
          </Reveal>
          <Reveal delay={180} className="border border-white/10 bg-ink p-8 sm:p-10">
            <p className="eyebrow text-accent">Social</p>
            <SocialLinks className="mt-6 space-y-4! text-2xl" />
            <p className="mt-6 text-sm text-steel">Official Vanta FC accounts will be linked here when they launch.</p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
