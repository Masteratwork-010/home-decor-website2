import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-wide pt-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs tracking-wide text-muted">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 ? (
                <ChevronRight className="size-3.5 text-subtle" aria-hidden />
              ) : null}
              {item.href && !last ? (
                <Link to={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span className="text-fg" aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
