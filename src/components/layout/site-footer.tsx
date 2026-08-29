import { Link } from "@tanstack/react-router";
import { FOOTER_NAV, LEGAL_NAV, SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-warm">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-3xl text-ink">{SITE.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Inspiration, ideas, and practical guides for creating a home you
            love.
          </p>
          <div className="mt-6 flex gap-5 text-sm">
            <a
              href={SITE.pinterestUrl}
              className="text-fg underline-offset-4 hover:underline"
            >
              Pinterest
            </a>
            <a
              href={SITE.instagramUrl}
              className="text-fg underline-offset-4 hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
            Explore
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-fg hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
            Legal
          </p>
          <ul className="mt-4 space-y-2">
            {LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-fg hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/80">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BetterDecor. All rights reserved.</p>
          <p>Editorial inspiration. Not an online store.</p>
        </div>
      </div>
    </footer>
  );
}
