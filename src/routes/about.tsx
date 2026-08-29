import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { pageTitle } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: pageTitle("About") },
      {
        name: "description",
        content:
          "BetterDecor is an editorial home décor inspiration and product-guide platform. We help people find beautiful, practical, and affordable ways to improve their homes.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main id="main" className="pb-20">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <header className="container-narrow py-12 md:py-16">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          The studio
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-6xl">
          About BetterDecor
        </h1>
        <p className="mt-5 text-lg text-muted">
          BetterDecor is a home décor inspiration and product-guide platform. We
          help people discover beautiful, practical, and affordable ways to
          improve their homes — without turning the internet into another
          checkout page.
        </p>
      </header>
      <div className="container-wide overflow-hidden rounded-[2rem]">
        <img
          src="/images/about.jpg"
          alt="A sunlit living room styled with linen, oak, and ceramic vessels"
          className="aspect-[16/9] w-full object-cover"
        />
      </div>
      <div className="container-narrow mt-12 space-y-6 text-[1.0625rem] leading-relaxed">
        <p>
          The site is built for people who save rooms on Pinterest and then
          wonder what to do next. We write room-by-room ideas, organization
          notes, and product guides that explain what a piece is for — not how
          many stars it has.
        </p>
        <h2 className="pt-4 font-display text-3xl text-ink">How we work</h2>
        <p>
          Every article is meant to inspire first, then inform, then help you
          choose. Product sections describe materials, scale, and fit. They do
          not invent prices, discounts, stock, or reviews. When a retailer link
          is added later, it may be an affiliate link; we say so clearly.
        </p>
        <h2 className="pt-4 font-display text-3xl text-ink">What we cover</h2>
        <p>
          Bedroom and living room décor, small-space decorating, home
          organization, wall décor, lighting, and the accessories that finish a
          room. The tone is warm and practical — premium without being
          unwelcoming.
        </p>
        <p>
          Placeholder photography and sample articles are here so the site feels
          complete from day one. Replace them with your own original words and
          images whenever you are ready.
        </p>
        <p>
          Questions?{" "}
          <Link to="/contact" className="text-ink underline underline-offset-4">
            Write to us
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
