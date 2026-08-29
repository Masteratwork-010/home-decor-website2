import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { pageTitle } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: pageTitle("Terms & Conditions") },
      {
        name: "description",
        content:
          "Terms of use for BetterDecor, an editorial home décor inspiration website.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main id="main" className="pb-20">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />
      <article className="container-narrow py-12 md:py-16">
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-6 text-muted">Last updated: April 2026</p>
        <div className="mt-8 space-y-5 leading-relaxed">
          <p>
            By using BetterDecor, you agree to these terms. If you do not agree,
            please do not use the site.
          </p>
          <h2 className="pt-4 font-display text-3xl text-ink">
            Editorial content
          </h2>
          <p>
            Articles, photographs, and product notes are for inspiration and
            general information. They are not interior-design contracts,
            professional advice, or guarantees that a product will suit your
            home.
          </p>
          <h2 className="pt-4 font-display text-3xl text-ink">
            No online store
          </h2>
          <p>
            BetterDecor does not sell products directly. Purchases made through
            third-party links are between you and the retailer. We are not
            responsible for shipping, returns, pricing, or product quality on
            those sites.
          </p>
          <h2 className="pt-4 font-display text-3xl text-ink">Intellectual property</h2>
          <p>
            The BetterDecor name, site design, and original writing are owned by
            BetterDecor unless otherwise noted. Placeholder images and sample
            articles are provided so the site can be reviewed and later replaced
            with your own original materials.
          </p>
          <h2 className="pt-4 font-display text-3xl text-ink">Limitation</h2>
          <p>
            The site is provided as is. We work to keep information useful and
            current, but we do not warrant that every page is complete or
            error-free.
          </p>
          <h2 className="pt-4 font-display text-3xl text-ink">Changes</h2>
          <p>
            We may update these terms from time to time. The date at the top of
            this page will change when we do.
          </p>
        </div>
      </article>
    </main>
  );
}
