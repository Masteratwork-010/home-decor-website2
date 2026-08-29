import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getArticlesByRoom } from "@/data/articles";
import { getRoom } from "@/data/rooms";
import { pageTitle } from "@/data/site";

const room = getRoom("living-room")!;

export const Route = createFileRoute("/living-room")({
  head: () => ({
    meta: [
      { title: pageTitle("Living Room Décor Ideas") },
      {
        name: "description",
        content:
          "Living room décor, small-space layouts, and cozy styling ideas for rooms you actually sit in.",
      },
    ],
  }),
  component: LivingRoomPage,
});

function LivingRoomPage() {
  return (
    <CategoryPage
      title={room.name}
      kicker="Room collection"
      intro={room.description}
      image={room.image}
      imageAlt={room.imageAlt}
      articles={getArticlesByRoom("living-room")}
    />
  );
}
