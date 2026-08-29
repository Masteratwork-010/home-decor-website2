import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getArticlesByRoom } from "@/data/articles";
import { getRoom } from "@/data/rooms";
import { pageTitle } from "@/data/site";

const room = getRoom("small-spaces")!;

export const Route = createFileRoute("/small-spaces")({
  head: () => ({
    meta: [
      { title: pageTitle("Small Space Decorating Ideas") },
      {
        name: "description",
        content:
          "Small-space decorating, apartment layouts, and storage ideas that keep compact rooms feeling open.",
      },
    ],
  }),
  component: SmallSpacesPage,
});

function SmallSpacesPage() {
  return (
    <CategoryPage
      title={room.name}
      kicker="Room collection"
      intro={room.description}
      image={room.image}
      imageAlt={room.imageAlt}
      articles={getArticlesByRoom("small-spaces")}
    />
  );
}
