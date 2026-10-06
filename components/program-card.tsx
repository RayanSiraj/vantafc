import Image from "next/image";
import Link from "next/link";
import type { Program } from "@/lib/content";
import { StatusBadge } from "./status-badge";

type ProgramCardProps = { program: Program; index?: number; href?: string };

export function ProgramCard({ program, index = 0, href }: ProgramCardProps) {
  const link = href ?? `/programs#${program.slug}`;
  const comingSoon = program.availability === "coming-soon";
  return (
    <Link
      href={link}
      className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden border border-white/10 bg-char p-6 sm:p-8"
    >
      <Image
        src={program.image.src}
        alt={program.image.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className={`photo-mono object-cover transition-[transform,opacity] duration-[1.2s] ease-out-expo group-hover:scale-105 ${
          comingSoon ? "opacity-25 group-hover:opacity-35" : "opacity-45 group-hover:opacity-60"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" aria-hidden="true" />
      <div className="relative flex items-start justify-between gap-4">
        <span className="font-display text-2xl text-white/40">{String(index + 1).padStart(2, "0")}</span>
        <StatusBadge status={program.availability} />
      </div>
      <div className="relative">
        {program.ages && <p className="eyebrow mb-3 text-gold">{program.ages}</p>}
        <h3 className="font-display text-4xl sm:text-5xl">{program.name}</h3>
        <p className="mt-4 max-w-sm text-mist">{program.summary}</p>
        <span className="eyebrow mt-6 inline-flex items-center gap-3 text-chalk">
          Learn more
          <span className="h-px w-8 bg-chalk transition-all duration-500 ease-out-expo group-hover:w-14" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
