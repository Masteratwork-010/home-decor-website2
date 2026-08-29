import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/types";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const href = product.affiliateUrl || `/product-guides/${product.guideSlug}`;
  const external = Boolean(product.affiliateUrl);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-surface shadow-card">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-ink">{product.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {product.description}
        </p>
        <p className="mt-4 text-xs font-medium tracking-[0.14em] text-muted uppercase">
          Best for
        </p>
        <p className="mt-1 text-sm text-fg">{product.bestFor}</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
              Why it works
            </p>
            <ul className="mt-2 space-y-1 text-sm text-fg">
              {product.pros.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.14em] text-muted uppercase">
              Consider
            </p>
            <ul className="mt-2 space-y-1 text-sm text-fg">
              {product.considerations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full bg-bg-warm px-3 py-1 text-xs text-muted"
            >
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          {external ? (
            <Button asChild>
              <a href={href} rel="nofollow sponsored noopener" target="_blank">
                View Product
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          ) : (
            <Button asChild variant="outline">
              <Link to="/product-guides/$slug" params={{ slug: product.guideSlug }}>
                View Guide
              </Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
