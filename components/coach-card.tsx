import Image from "next/image";
import type { Coach, StaffRole } from "@/lib/content";
import { Crest } from "./crest";

type CoachCardProps = { coach?: Coach; role: StaffRole; blurb?: string };

/** Renders a confirmed staff profile, or a "Coming soon" placeholder for an open role. */
export function CoachCard({ coach, role, blurb }: CoachCardProps) {
  return (
    <article className="group flex flex-col border border-white/10 bg-char">
      <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
        {coach?.image ? (
          <Image src={coach.image.src} alt={coach.image.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="photo-mono object-cover transition-transform duration-1000 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_35%,#2a2a2e,#121214_70%)]">
            <Crest className="h-24 w-auto text-white/10" title="" />
            <span className="eyebrow absolute bottom-5 left-5 text-steel">Coming soon</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-gold">{role}</p>
        <h3 className="mt-3 font-display text-3xl">{coach?.name ?? "To be announced"}</h3>
        <p className="mt-3 text-sm leading-relaxed text-mist">{coach?.bio ?? blurb}</p>
        {coach?.credentials && coach.credentials.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {coach.credentials.map((c) => (
              <li key={c} className="border border-white/15 px-2 py-1 text-xs text-mist">{c}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
