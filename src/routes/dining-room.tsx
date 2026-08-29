import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getArticlesByRoom } from "@/data/articles";
import { getRoom } from "@/data/rooms";
import { pageTitle } from "@/data/site";

const room = getRoom("dining-room")!;

export const Route = createFileRoute("/dining-room")({
  head: () => ({
    meta: [
      { title: pageTitle("Dining Room Décor Ideas") },
      {
        name: "description",
        content:
          "Dining room styling, pendant lighting, and simple table ideas for everyday meals.",
      },
    ],
  }),
  component: DiningRoomPage,
});

function DiningRoomPage() {
  return (
    <CategoryPage
      title={room.name}
      kicker="Room collection"
      intro={room.description}
      image={room.image}
      imageAlt={room.imageAlt}
      articles={getArticlesByRoom("dining-room")}
    />
  );
}
