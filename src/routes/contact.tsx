import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { pageTitle, SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: pageTitle("Contact") },
      {
        name: "description",
        content:
          "Contact BetterDecor with partnership, content, or reader questions.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main id="main" className="pb-20">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <header className="container-narrow py-12 md:py-16">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Hello
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink md:text-6xl">
          Contact
        </h1>
        <p className="mt-5 text-lg text-muted">
          For reader questions, collaborations, and corrections. You can also
          write to{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-ink underline underline-offset-4"
          >
            {SITE.email}
          </a>
          .
        </p>
      </header>
      <div className="container-narrow">
        {sent ? (
          <p className="rounded-3xl bg-bg-warm px-6 py-10 text-center text-fg" role="status">
            Thank you. This preview keeps your note on this device only — add
            your email service when you are ready to receive messages.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5 rounded-3xl bg-surface p-6 shadow-card md:p-8">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required autoComplete="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="topic">Topic</Label>
              <Input
                id="topic"
                name="topic"
                placeholder="Partnership, content, or a question"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required />
            </div>
            <Button type="submit">Send message</Button>
          </form>
        )}
      </div>
    </main>
  );
}
