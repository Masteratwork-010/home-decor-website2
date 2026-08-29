import { createFileRoute } from "@tanstack/react-router";
import { ArticleCard } from "@/components/article-card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { articles } from "@/data/articles";
import { pageTitle } from "@/data/site";

export const Route = createFileRoute("/decor-ideas")({
  head: () => ({
    meta: [
      { title: pageTitle("Décor Ideas") },
      {
        name: "description",
        content:
          "Bedroom, living room, small-space, and budget décor ideas from BetterDecor — practical inspiration for a better home.",
      },
    ],
  }),
  component: DecorIdeasPage,
});

function DecorIdeasPage() {
  const sorted = [...articles].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );

  return (
    <main id="main" className="pb-20">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Décor Ideas" }]}
      />
      <header className="container-narrow py-12 md:py-16">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Journal
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-6xl">
          Décor Ideas
        </h1>
        <p className="mt-5 text-lg text-muted">
          Room makeovers, styling notes, and practical guides. Written to be
          useful on a phone after a Pinterest tap — and easy to replace with
          your own original articles later.
        </p>
      </header>
      <div className="container-wide grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sorted.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </main>
  );
}
