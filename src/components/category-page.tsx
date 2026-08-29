import { Link } from "@tanstack/react-router";
import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import type { Article } from "@/data/types";
import { productGuides } from "@/data/product-guides";

export function CategoryPage({
  title,
  kicker,
  intro,
  image,
  imageAlt,
  articles,
}: {
  title: string;
  kicker: string;
  intro: string;
  image: string;
  imageAlt: string;
  articles: Article[];
}) {
  return (
    <main id="main">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
      <header className="container-wide grid items-end gap-10 py-10 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
            {kicker}
          </p>
          <h1 className="mt-3 font-display text-4xl text-ink md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {intro}
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img src={image} alt={imageAlt} className="aspect-[4/3] w-full object-cover" />
        </div>
      </header>

      <section className="container-wide pb-20">
        <h2 className="font-display text-3xl text-ink">Guides & ideas</h2>
        {articles.length === 0 ? (
          <p className="mt-6 text-muted">New articles for this room are on the way.</p>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-border bg-surface">
        <div className="container-wide py-16">
          <h2 className="font-display text-3xl text-ink">Related product guides</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productGuides.slice(0, 3).map((guide) => (
              <Link
                key={guide.slug}
                to="/product-guides/$slug"
                params={{ slug: guide.slug }}
                className="rounded-3xl bg-bg px-5 py-5 shadow-card hover:shadow-card-hover"
              >
                <p className="font-display text-2xl text-ink">{guide.title}</p>
                <p className="mt-2 text-sm text-muted">{guide.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
