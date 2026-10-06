const words = ["Develop", "Compete", "Lead", "Play with purpose", "Davis Park", "St. Johns County"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink py-5" aria-hidden="true">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl text-white/70 sm:text-4xl">
            {w}
            <span className="h-2 w-2 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
