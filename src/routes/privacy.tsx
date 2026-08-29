import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { pageTitle } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: pageTitle("Privacy Policy") },
      {
        name: "description",
        content:
          "How BetterDecor collects, uses, and protects information when you visit the site or join the newsletter.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main id="main" className="pb-20">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <article className="container-narrow py-12 md:py-16">
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-muted">Last updated: April 2026</p>
        <div className="mt-8 space-y-5 leading-relaxed">
          <p>
            BetterDecor respects your privacy. This policy explains what
            information we may collect and how it is used. It is written for a
            content website, not an online store.
          </p>
          <h2 className="pt-4 font-display text-3xl text-ink">
            Information we collect
          </h2>
          <p>
            If you join the newsletter or send a contact message, you may
            provide your name, email address, and message. In this preview,
            those details stay on your device and are not sent to a server.
          </p>
          <p>
            Like most websites, we may collect standard technical data such as
            browser type, device, and pages visited through hosting or analytics
            tools if they are added later.
          </p>
          <h2 className="pt-4 font-display text-3xl text-ink">How we use it</h2>
          <p>
            We use contact details to reply to you and, if you subscribe, to
            send décor inspiration. We do not sell personal information. We do
            not use your data to run an online store.
          </p>
          <h2 className="pt-4 font-display text-3xl text-ink">Cookies</h2>
          <p>
            The site may use essential cookies to remember preferences. If
            analytics or advertising cookies are added in the future, this page
            will be updated.
          </p>
          <h2 className="pt-4 font-display text-3xl text-ink">Affiliate links</h2>
          <p>
            Retailer sites you visit through affiliate links have their own
            privacy policies. We encourage you to read them.
          </p>
          <h2 className="pt-4 font-display text-3xl text-ink">Contact</h2>
          <p>
            For privacy questions, use the Contact page and mention “Privacy” in
            the topic line.
          </p>
        </div>
      </article>
    </main>
  );
}
