import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const STORAGE_KEY = "betterdecor-newsletter";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error");
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore quota */
    }
    setStatus("ok");
    setEmail("");
  }

  return (
    <section className="border-t border-border bg-surface">
      <div className="container-narrow py-16 text-center">
        <p className="text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Newsletter
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          Get Fresh Décor Inspiration
        </h2>
        <p className="mt-3 text-muted">
          Receive new decorating ideas, useful guides, and home inspiration.
        </p>
        {status === "ok" ? (
          <p className="mt-8 text-sm text-accent" role="status">
            You are on the list. We will send ideas, not clutter.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <Input
              id="newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              required
            />
            <Button type="submit" className="sm:px-6">
              Subscribe
            </Button>
          </form>
        )}
        {status === "error" ? (
          <p className="mt-3 text-sm text-muted" role="alert">
            Please enter a valid email address.
          </p>
        ) : null}
      </div>
    </section>
  );
}
