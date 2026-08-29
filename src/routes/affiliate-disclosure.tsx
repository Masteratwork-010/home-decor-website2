import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { pageTitle } from "@/data/site";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [
      { title: pageTitle("Affiliate Disclosure") },
      {
        name: "description",
        content:
          "BetterDecor may earn a commission from qualifying purchases made through affiliate links, at no extra cost to you.",
      },
    ],
  }),
  component: AffiliatePage,
});

function AffiliatePage() {
  return (
    <main id="main" className="pb-20">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Affiliate Disclosure" },
        ]}
      />
      <article className="container-narrow py-12 md:py-16">
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          Affiliate Disclosure
        </h1>
        <p className="mt-6 text-muted">Last updated: April 2026</p>
        <div className="mt-8 space-y-5 leading-relaxed">
          <p>
            BetterDecor is an editorial website. We publish décor ideas, room
            guides, and product notes to help readers choose furnishings and
            accessories that fit their homes.
          </p>
          <p>
            Some links on BetterDecor may be affiliate links. That means if you
            click a link and make a qualifying purchase, BetterDecor may earn a
            commission. This happens at no additional cost to you.
          </p>
          <p>
            Affiliate relationships do not change the price you pay. They also
            do not require us to recommend a product. We do not invent ratings,
            discounts, stock levels, or reviews, and we do not copy retailer
            product descriptions.
          </p>
          <p>
            When a product section includes a “View Product” button, that button
            may later point to a retailer. Until a specific affiliate URL is
            added, the button may lead to a BetterDecor guide instead.
          </p>
          <p>
            We may also receive compensation for sponsored content if we ever
            publish it. Sponsored pieces will be labeled as such.
          </p>
          <p>
            If you have questions about this disclosure, write to us from the
            Contact page.
          </p>
        </div>
      </article>
    </main>
  );
}
