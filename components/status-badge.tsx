import type { Availability } from "@/lib/content";

const labels: Record<Availability, string> = {
  open: "Registration open",
  interest: "Register interest",
  "coming-soon": "Coming soon",
};

export function StatusBadge({ status, className = "" }: { status: Availability; className?: string }) {
  const dot =
    status === "open" ? "bg-emerald-400" : status === "interest" ? "bg-accent" : "bg-steel";
  return (
    <span
      className={`inline-flex items-center gap-2 border border-white/15 bg-ink/70 px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.2em] text-chalk uppercase backdrop-blur ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
      {labels[status]}
    </span>
  );
}
