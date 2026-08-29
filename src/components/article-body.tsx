import type { Article } from "@/data/types";
import { getProduct } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export function ArticleBody({ article }: { article: Article }) {
  return (
    <div className="space-y-6">
      {article.blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p key={index} className="text-[1.0625rem] leading-[1.75] text-fg">
              {block.text}
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2
              key={block.id}
              id={block.id}
              className="scroll-mt-28 pt-4 font-display text-3xl text-ink"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={block.id}
              id={block.id}
              className="scroll-mt-28 pt-2 font-display text-2xl text-ink"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5 text-fg">
              {block.items.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={index} className="list-decimal space-y-2 pl-5 text-fg">
              {block.items.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ol>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={index} className="overflow-hidden rounded-3xl">
              <img
                src={block.src}
                alt={block.alt}
                className="w-full object-cover"
              />
              {block.caption ? (
                <figcaption className="mt-3 text-sm text-muted">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="border-l-2 border-accent pl-5 font-display text-2xl leading-snug text-ink"
            >
              {block.text}
              {block.cite ? (
                <cite className="mt-3 block font-sans text-sm text-muted not-italic">
                  {block.cite}
                </cite>
              ) : null}
            </blockquote>
          );
        }
        if (block.type === "note") {
          return (
            <p
              key={index}
              className="rounded-2xl bg-bg-warm px-5 py-4 text-sm leading-relaxed text-muted"
            >
              {block.text}
            </p>
          );
        }
        if (block.type === "product") {
          const product = getProduct(block.productId);
          if (!product) return null;
          return (
            <div key={block.productId} className="py-2">
              <p className="mb-3 text-xs font-medium tracking-[0.16em] text-muted uppercase">
                Product to consider
              </p>
              <ProductCard product={product} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
