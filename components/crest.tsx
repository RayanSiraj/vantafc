type CrestProps = { className?: string; title?: string };

/** Temporary Vanta FC club mark: a shield with a V monogram. */
export function Crest({ className, title = "Vanta FC crest" }: CrestProps) {
  return (
    <svg viewBox="0 0 64 74" className={className} role="img" aria-label={title} fill="none">
      <path
        d="M32 2.5 60 10v26.5C60 54 47.5 65.5 32 71.5 16.5 65.5 4 54 4 36.5V10L32 2.5Z"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <path d="M16.5 20h8.6L32 42.2 38.9 20h8.6L36.3 53h-8.6L16.5 20Z" fill="currentColor" />
      <path d="M11 13.6 32 8l21 5.6" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
    </svg>
  );
}

type WordmarkProps = { className?: string };

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <Crest className="h-9 w-auto shrink-0" title="" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.65rem] tracking-[0.02em]">Vanta FC</span>
        <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.32em] text-steel uppercase">
          St. Johns County
        </span>
      </span>
    </span>
  );
}
