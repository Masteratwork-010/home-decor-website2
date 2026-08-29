import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import { FOOTER_NAV, NAV_MORE, NAV_PRIMARY, SITE } from "@/data/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SearchDialog } from "@/components/search-dialog";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Link
          to="/"
          className="font-display text-[1.65rem] leading-none tracking-tight text-ink md:text-[1.85rem]"
        >
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_PRIMARY.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-[0.8125rem] tracking-[0.08em] uppercase transition-colors",
                pathname === item.href
                  ? "text-ink"
                  : "text-muted hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search articles"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-5" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="pr-10">{SITE.name}</SheetTitle>
              <p className="mt-2 text-sm text-muted">
                Inspiration and practical guides for a home you love.
              </p>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {FOOTER_NAV.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex min-h-11 items-center rounded-xl px-3 text-base",
                        pathname === item.href
                          ? "bg-bg-warm text-ink"
                          : "text-fg hover:bg-bg-warm",
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="hidden lg:block">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-[0.8125rem] tracking-[0.08em] uppercase">
                  More
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>Explore</SheetTitle>
                <nav className="mt-8 flex flex-col gap-1">
                  {NAV_MORE.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        to={item.href}
                        className="flex min-h-11 items-center rounded-xl px-3 text-base text-fg hover:bg-bg-warm"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
