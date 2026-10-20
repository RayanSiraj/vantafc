import Link from "next/link";
import { footerNav, joinHref, site } from "@/lib/site";
import { CrestBadge } from "./crest";
import { ButtonLink } from "./button";
import { SocialLinks } from "./social-links";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 pb-10 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <CrestBadge className="h-28 w-28" />
            <p className="mt-8 font-display text-5xl sm:text-6xl">Vanta FC</p>
            <p className="eyebrow mt-4 text-steel">{site.location.short}</p>
            <p className="mt-6 max-w-sm text-mist">Develop the player. Build the person. Love the game.</p>
            <ButtonLink href={joinHref} className="mt-8">
              Join Vanta
            </ButtonLink>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            {footerNav.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <p className="eyebrow mb-5 text-steel">{group.heading}</p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-chalk/90 transition-colors hover:text-accent">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div>
              <p className="eyebrow mb-5 text-steel">Follow</p>
              <SocialLinks />
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="pointer-events-none mt-20 select-none font-display text-[22vw] leading-[0.75] text-white/[0.04] lg:text-[17rem]">
          Vanta FC
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.copyrightYear} Vanta FC. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="hover:text-chalk">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-chalk">Terms</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
