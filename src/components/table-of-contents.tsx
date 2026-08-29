export function TableOfContents({
  items,
}: {
  items: { id: string; text: string }[];
}) {
  if (items.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-3xl bg-bg-warm px-5 py-5"
    >
      <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">
        In this guide
      </p>
      <ol className="mt-3 space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-fg hover:text-ink"
            >
              <span className="mr-2 text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
