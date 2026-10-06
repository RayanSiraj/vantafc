import type { VantaEvent } from "@/lib/content";
import { joinHref } from "@/lib/site";
import { ButtonLink } from "./button";
import { StatusBadge } from "./status-badge";

function formatDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return {
    month: d.toLocaleString("en-US", { month: "short" }),
    day: d.toLocaleString("en-US", { day: "2-digit" }),
    weekday: d.toLocaleString("en-US", { weekday: "long" }),
    year: d.getFullYear(),
  };
}

export function EventCard({ event }: { event: VantaEvent }) {
  const date = formatDate(event.date);
  const href = event.registerHref ?? `${joinHref}?program=${encodeURIComponent(event.name)}`;
  return (
    <article className="grid gap-6 border border-white/10 bg-char p-6 transition-colors hover:border-white/25 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:p-8">
      <div className="flex items-baseline gap-3 sm:flex-col sm:gap-0">
        <span className="eyebrow text-gold">{date.month}</span>
        <time dateTime={event.date} className="font-display text-6xl">{date.day}</time>
        <span className="text-sm text-steel">{date.weekday}</span>
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="eyebrow text-steel">{event.type}</span>
          <StatusBadge status={event.availability} />
        </div>
        <h3 className="mt-3 font-display text-4xl">{event.name}</h3>
        <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-mist">
          <div className="flex gap-2"><dt className="text-steel">Ages</dt><dd>{event.ageGroup}</dd></div>
          <div className="flex gap-2"><dt className="text-steel">Location</dt><dd>{event.location}</dd></div>
          {event.time && <div className="flex gap-2"><dt className="text-steel">Time</dt><dd>{event.time}</dd></div>}
        </dl>
        <p className="mt-4 max-w-2xl text-mist">{event.description}</p>
      </div>
      <ButtonLink href={href} external={Boolean(event.registerHref?.startsWith("http"))}>
        {event.availability === "open" ? "Register" : "Register interest"}
      </ButtonLink>
    </article>
  );
}
