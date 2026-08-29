import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getArticlesByRoom } from "@/data/articles";
import { getRoom } from "@/data/rooms";
import { pageTitle } from "@/data/site";

const room = getRoom("home-office")!;

export const Route = createFileRoute("/home-office")({
  head: () => ({
    meta: [
      { title: pageTitle("Home Office Décor Ideas") },
      {
        name: "description",
        content:
          "Home office ideas for small apartments: calmer desks, lighting, and storage that still feels like home.",
      },
    ],
  }),
  component: HomeOfficePage,
});

function HomeOfficePage() {
  return (
    <CategoryPage
      title={room.name}
      kicker="Room collection"
      intro={room.description}
      image={room.image}
      imageAlt={room.imageAlt}
      articles={getArticlesByRoom("home-office")}
    />
  );
}
