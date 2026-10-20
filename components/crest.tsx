import Image from "next/image";

type CrestProps = { className?: string; title?: string };

export function Crest({ className, title = "Vanta FC crest" }: CrestProps) {
  return (
    <svg
      viewBox="0 0 303 345"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      fill="currentColor"
    >
      <path d="M4 26 31 10 152 195 272 10 299 26 152 253Z" />
      <path d="M4 106 31 90 152 275 272 90 299 106 152 335Z" />
    </svg>
  );
}

type CrestBadgeProps = { className?: string; title?: string };

export function CrestBadge({ className, title = "Vanta Football Club crest" }: CrestBadgeProps) {
  return (
    <Image
      src="/brand/vanta-fc-crest.png"
      width={800}
      height={800}
      className={className}
      alt={title}
    />
  );
}

type WordmarkProps = { className?: string };

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <Crest className="h-9 w-auto shrink-0 text-accent" title="" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.65rem] tracking-[0.02em]">Vanta FC</span>
        <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.32em] text-steel uppercase">
          St. Johns County
        </span>
      </span>
    </span>
  );
}
