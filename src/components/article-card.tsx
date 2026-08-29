import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/data/types";
import { CATEGORIES } from "@/data/site";
import { cn } from "@/lib/utils";

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  const category = CATEGORIES.find((item) => item.slug === article.category);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl bg-surface shadow-card transition-[box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-card-hover",
        featured && "md:flex-row",
      )}
    >
      <Link
        to="/articles/$slug"
        params={{ slug: article.slug }}
        className={cn(
          "block overflow-hidden",
          featured ? "md:w-[56%]" : "aspect-[3/2]",
        )}
      >
        <img
          src={article.image}
          alt={article.imageAlt}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]",
            featured ? "aspect-[3/2] md:aspect-auto md:min-h-[22rem]" : "aspect-[3/2]",
          )}
        />
      </Link>
      <div className={cn("flex flex-1 flex-col p-6", featured && "md:p-10")}>
        <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
          {category?.name} · {article.readTime} min read
        </p>
        <h3
          className={cn(
            "mt-3 font-display text-ink",
            featured ? "text-3xl md:text-4xl" : "text-2xl",
          )}
        >
          <Link
            to="/articles/$slug"
            params={{ slug: article.slug }}
            className="hover:text-fg"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <Link
          to="/articles/$slug"
          params={{ slug: article.slug }}
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink"
        >
          Read More
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
