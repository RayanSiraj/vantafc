"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { joinHref, mainNav, site } from "@/lib/site";
import { Wordmark } from "./crest";
import { buttonClasses } from "./button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:bg-chalk focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-20 lg:px-12">
        <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative py-2 text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-500 ${
                    isActive(item.href)
                      ? "text-chalk after:scale-x-100"
                      : "text-mist hover:text-chalk after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link href={joinHref} className={buttonClasses("primary", "md", "min-h-11! px-5! sm:min-h-12! sm:px-6!")}>
            Join Vanta
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-white/20 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-5 bg-chalk transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-px w-5 bg-chalk transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-px w-5 bg-chalk transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-ink xl:hidden"
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col justify-between px-5 pt-6 pb-10 sm:px-8">
          <ul>
            {mainNav.map((item, i) => (
              <li key={item.href} className="animate-rise" style={{ animationDelay: `${i * 40}ms` }}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-4xl ${
                    isActive(item.href) ? "text-chalk" : "text-mist"
                  }`}
                >
                  {item.label}
                  <span className="text-xs font-sans tracking-[0.2em] text-steel">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 space-y-4">
            <Link href={joinHref} onClick={() => setOpen(false)} className={buttonClasses("primary", "lg", "w-full")}>
              Join Vanta
            </Link>
            <p className="eyebrow text-center text-steel">{site.location.short}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
