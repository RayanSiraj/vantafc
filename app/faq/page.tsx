import { Container, Section } from "@/components/container";
import { FaqList } from "@/components/faq-list";
import { JoinCta } from "@/components/join-cta";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about Vanta FC youth soccer at Davis Park, St. Johns County: ages, location, experience, and how to join.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
      <PageHero eyebrow="FAQ" title="Questions, answered." intro="Everything families ask us most. Can't find it? Contact Vanta FC." />
      <Section tone="coal" className="pt-16! sm:pt-20!">
        <Container className="max-w-5xl">
          <FaqList items={faqs} />
        </Container>
      </Section>
      <JoinCta />
    </>
  );
}
