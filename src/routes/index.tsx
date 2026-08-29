import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { RoomCard } from "@/components/room-card";
import { Button } from "@/components/ui/button";
import {
  getFeaturedArticle,
  getLatestArticles,
  getPopularArticles,
} from "@/data/articles";
import { productGuides } from "@/data/product-guides";
import { rooms } from "@/data/rooms";
import { pageTitle, SITE } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle() },
      { name: "description", content: SITE.description },
    ],
  }),
  component: Home,
});

function Home() {
  const latest = getLatestArticles(6);
  const popular = getPopularArticles();
  const featured = getFeaturedArticle();
  const exploreRooms = rooms.filter((room) => room.slug !== "home-organization");

  return (
    <main id="main">
      <section className="relative min-h-[88svh] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="A sunlit living room with a cream linen sofa, oak table, and ceramic vessels"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/35 to-ink/10" />
        <div className="relative container-wide flex min-h-[88svh] items-end pb-16 pt-28 md:items-center md:pb-24">
          <div className="max-w-xl text-cream">
            <p className="font-display text-xl tracking-wide text-cream/80">
              {SITE.name}
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] text-cream md:text-7xl">
              Beautiful Ideas for a Better Home
            </h1>
            <p className="mt-6 text-base leading-relaxed text-cream/85 md:text-lg">
              Discover inspiring décor ideas, practical room guides, organization
              tips, and carefully selected products to help you create a home you
              love.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="cream">
                <Link to="/decor-ideas">Explore Décor Ideas</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream/40 text-cream hover:bg-cream/10 hover:text-cream"
              >
                <Link to="/product-guides">Read Our Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
            Rooms
          </p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            Explore by Room
          </h2>
          <p className="mt-4 text-muted">
            Start with the room you want to improve. Each collection gathers
            ideas, organization notes, and product guides for that space.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {exploreRooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-wide py-20 md:py-28">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
                Journal
              </p>
              <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
                Latest Décor Inspiration
              </h2>
            </div>
            <Link
              to="/decor-ideas"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink"
            >
              All ideas
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {latest[0] ? (
              <div className="lg:col-span-3">
                <ArticleCard article={latest[0]} featured />
              </div>
            ) : null}
            {latest.slice(1, 4).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <h2 className="font-display text-4xl text-ink md:text-5xl">
          Popular Décor Guides
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Practical, room-by-room reading for people who want a calmer home
          without a full redesign.
        </p>
        <ol className="mt-12 divide-y divide-border border-y border-border">
          {popular.map((article, index) => (
            <li key={article.slug}>
              <Link
                to="/articles/$slug"
                params={{ slug: article.slug }}
                className="group grid gap-4 py-6 md:grid-cols-12 md:items-center"
              >
                <span className="font-display text-2xl text-subtle md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="md:col-span-8">
                  <span className="block font-display text-2xl text-ink group-hover:text-fg md:text-3xl">
                    {article.title}
                  </span>
                  <span className="mt-2 block text-sm text-muted">
                    {article.excerpt}
                  </span>
                </span>
                <span className="text-sm text-muted md:col-span-3 md:text-right">
                  {article.readTime} min read
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-bg-warm">
        <div className="container-wide py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
              Research
            </p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
              Décor Product Guides
            </h2>
            <p className="mt-4 text-muted">
              BetterDecor researches useful décor products and creates guides to
              help readers compare features, styles, and suitability. These are
              editorial notes — not a checkout, and not a store.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {productGuides.map((guide) => (
              <article
                key={guide.slug}
                className="overflow-hidden rounded-3xl bg-surface shadow-card"
              >
                <Link
                  to="/product-guides/$slug"
                  params={{ slug: guide.slug }}
                  className="block aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={guide.image}
                    alt={guide.imageAlt}
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-ink">{guide.title}</h3>
                  <p className="mt-2 text-sm text-muted">{guide.excerpt}</p>
                  <Button asChild variant="outline" className="mt-5">
                    <Link
                      to="/product-guides/$slug"
                      params={{ slug: guide.slug }}
                    >
                      View Guide
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="overflow-hidden rounded-[2rem] bg-surface shadow-card lg:grid lg:grid-cols-2">
          <img
            src={featured.image}
            alt={featured.imageAlt}
            className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
          />
          <div className="flex flex-col justify-center p-8 md:p-14">
            <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
              Featured article
            </p>
            <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-5 text-muted">{featured.excerpt}</p>
            <div className="mt-8">
              <Button asChild>
                <Link to="/articles/$slug" params={{ slug: featured.slug }}>
                  Read Article
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-wide grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-cream/60 uppercase">
              Pinterest
            </p>
            <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
              More Décor Inspiration on Pinterest
            </h2>
            <p className="mt-4 max-w-md text-cream/75">
              Discover more room ideas, decorating inspiration, and BetterDecor
              guides on Pinterest.
            </p>
            <div className="mt-8">
              <Button asChild variant="cream">
                <a href={SITE.pinterestUrl}>
                  Follow BetterDecor on Pinterest
                </a>
              </Button>
            </div>
            <p className="mt-4 text-xs text-cream/50">
              Profile link: {SITE.pinterestUrl}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              "/images/articles/bedroom-decor-ideas.jpg",
              "/images/articles/minimalist-decor.jpg",
              "/images/articles/budget-decor.jpg",
            ].map((src, index) => (
              <img
                key={src}
                src={src}
                alt=""
                className={`rounded-2xl object-cover ${index === 1 ? "mt-8 aspect-[3/4]" : "aspect-[3/4]"}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
