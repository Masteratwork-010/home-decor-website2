import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { getArticlesByRoom } from "@/data/articles";
import { getRoom } from "@/data/rooms";
import { pageTitle } from "@/data/site";

const room = getRoom("home-organization")!;

export const Route = createFileRoute("/home-organization")({
  head: () => ({
    meta: [
      { title: pageTitle("Home Organization Ideas") },
      {
        name: "description",
        content:
          "Home organization, decluttering, and storage ideas that still look like a lived-in home.",
      },
    ],
  }),
  component: HomeOrganizationPage,
});

function HomeOrganizationPage() {
  return (
    <CategoryPage
      title={room.name}
      kicker="Systems"
      intro={room.description}
      image={room.image}
      imageAlt={room.imageAlt}
      articles={getArticlesByRoom("home-organization")}
    />
  );
}
