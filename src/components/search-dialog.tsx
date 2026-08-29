import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { searchArticles } from "@/data/articles";
import { CATEGORIES } from "@/data/site";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchArticles(query), [query]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onOpenChange(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-ink/35"
        aria-label="Close search"
        onClick={() => onOpenChange(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search articles"
        className="relative mx-auto mt-20 w-[min(36rem,calc(100%-1.5rem))] rounded-3xl bg-surface p-5 shadow-card"
      >
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-subtle" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search décor ideas and guides"
            className="pl-11"
          />
        </div>
        <div className="mt-4 max-h-[50vh] overflow-y-auto">
          {query.trim() && results.length === 0 ? (
            <p className="px-2 py-6 text-sm text-muted">
              No articles match that search. Try a room name or a topic such as
              lighting.
            </p>
          ) : null}
          <ul className="space-y-1">
            {(query.trim() ? results : []).map((article) => {
              const category = CATEGORIES.find((c) => c.slug === article.category);
              return (
                <li key={article.slug}>
                  <Link
                    to="/articles/$slug"
                    params={{ slug: article.slug }}
                    onClick={() => onOpenChange(false)}
                    className={cn(
                      "block rounded-2xl px-3 py-3 hover:bg-bg-warm",
                    )}
                  >
                    <p className="text-sm font-medium text-ink">{article.title}</p>
                    <p className="mt-1 text-xs tracking-wide text-muted uppercase">
                      {category?.name} · {article.readTime} min
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
