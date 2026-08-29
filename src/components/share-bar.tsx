import { Check, Link2 } from "lucide-react";
import { useState } from "react";
import type { Article } from "@/data/types";
import { Button } from "@/components/ui/button";

export function ShareBar({ article }: { article: Article }) {
  const [copied, setCopied] = useState(false);

  function shareUrl() {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/articles/${article.slug}`;
  }

  function pinUrl() {
    const url = encodeURIComponent(shareUrl());
    const media = encodeURIComponent(
      `${typeof window === "undefined" ? "" : window.location.origin}${article.image}`,
    );
    const description = encodeURIComponent(`${article.title} — BetterDecor`);
    return `https://www.pinterest.com/pin/create/button/?url=${url}&media=${media}&description=${description}`;
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button asChild variant="outline" size="sm">
        <a href={pinUrl()} target="_blank" rel="noreferrer">
          Pin on Pinterest
        </a>
      </Button>
      <Button variant="ghost" size="sm" onClick={copyLink}>
        {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
        {copied ? "Link copied" : "Copy link"}
      </Button>
    </div>
  );
}
