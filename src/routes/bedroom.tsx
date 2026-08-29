import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getArticlesByRoom } from "@/data/articles";
import { getRoom } from "@/data/rooms";
import { pageTitle } from "@/data/site";

const room = getRoom("bedroom")!;

export const Route = createFileRoute("/bedroom")({
  head: () => ({
    meta: [
      { title: pageTitle("Bedroom Décor Ideas") },
      {
        name: "description",
        content:
          "Bedroom décor ideas, organization tips, and lighting notes for calmer, more restful rooms.",
      },
    ],
  }),
  component: BedroomPage,
});

function BedroomPage() {
  return (
    <CategoryPage
      title={room.name}
      kicker="Room collection"
      intro={room.description}
      image={room.image}
      imageAlt={room.imageAlt}
      articles={getArticlesByRoom("bedroom")}
    />
  );
}
