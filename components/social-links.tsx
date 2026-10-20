import { site } from "@/lib/site";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {site.socials.map((s) => (
        <li key={s.label}>
          {s.href ? (
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-chalk/90 transition-colors hover:text-accent">
              {s.label}
            </a>
          ) : (
            <span className="flex items-baseline gap-2 text-chalk/60">
              {s.label}
              <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-steel uppercase">Soon</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
