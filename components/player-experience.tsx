import Image from "next/image";
import { experience } from "@/lib/content";
import { Container, Section } from "./container";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const images = [
  { src: "/images/park-field.jpg", alt: "An open grass field with a goal at the far end" },
  { src: "/images/first-touch.jpg", alt: "A player's boot taking a first touch on the ball" },
  { src: "/images/duel.jpg", alt: "Two players competing for the ball" },
  { src: "/images/youth-match.jpg", alt: "Young players playing together in a match" },
  { src: "/images/player-volley.jpg", alt: "A player striking the ball with full commitment" },
];

export function PlayerExperience() {
  return (
    <Section labelledBy="experience-title">
      <Container>
        <SectionHeading
          eyebrow="A Vanta session"
          title={<span id="experience-title">Leave better than you arrived.</span>}
          intro="What a typical Vanta FC experience feels like."
        />
        <ol className="mt-16 grid gap-4 md:grid-cols-5">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.step} delay={i * 110} className="group relative">
              <div className="relative aspect-[3/4] overflow-hidden md:aspect-[2/3]">
                <Image
                  src={images[i].src}
                  alt={images[i].alt}
                  fill
                  sizes="(min-width: 768px) 20vw, 100vw"
                  className="photo-mono object-cover opacity-60 transition-[transform,opacity] duration-1000 ease-out-expo group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="eyebrow text-gold">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-4xl lg:text-5xl">{e.step}</h3>
                  <p className="mt-2 text-sm text-mist">{e.body}</p>
                </div>
              </div>
              {i < experience.length - 1 && (
                <span aria-hidden="true" className="absolute top-1/2 -right-3 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center bg-gold text-xs text-ink md:flex">→</span>
              )}
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
