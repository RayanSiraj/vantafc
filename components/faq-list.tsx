import type { Faq } from "@/lib/content";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="border-t border-white/10">
      {items.map((f) => (
        <details key={f.question} className="group border-b border-white/10">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-3xl sm:text-4xl">{f.question}</h3>
            <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
              <span className="absolute top-1/2 left-0 h-px w-4 bg-chalk" />
              <span className="absolute top-0 left-1/2 h-4 w-px bg-chalk transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
            </span>
          </summary>
          <p className="max-w-3xl pb-8 text-lg leading-relaxed text-mist">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
