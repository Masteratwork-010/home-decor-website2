import type { ProductGuide } from "./types";
import { products } from "./products";

export const productGuides: ProductGuide[] = [
  {
    slug: "lighting",
    title: "Lighting",
    excerpt:
      "Lamps, pendants, and warm bulbs that make a room feel finished after dark.",
    image: "/images/guides/lighting.jpg",
    imageAlt: "A dining room lit by a warm pendant over an oak table",
    intro:
      "Lighting is usually the fastest way to change how a room feels. This guide looks at table lamps, floor lamps, and overhead fixtures that add warmth without turning a space into a showroom.",
    productIds: ["ceramic-linen-lamp", "paper-floor-lamp"],
  },
  {
    slug: "wall-decor",
    title: "Wall Décor",
    excerpt:
      "Art, mirrors, and quiet wall ideas that feel collected rather than cluttered.",
    image: "/images/guides/wall-decor.jpg",
    imageAlt: "A living room with a large framed print above a low oak console",
    intro:
      "Empty walls can make a room feel unfinished; too many small frames can make it feel busy. These pieces are chosen for scale, calm palettes, and simple hanging.",
    productIds: ["framed-neutral-print"],
  },
  {
    slug: "storage-organization",
    title: "Storage & Organization",
    excerpt:
      "Baskets, shelves, and closed storage that keep daily life out of sight.",
    image: "/images/guides/storage.jpg",
    imageAlt: "A small living space with woven baskets and wall-mounted oak shelves",
    intro:
      "Good storage should disappear into the room. This guide focuses on pieces you can actually live with — baskets, shallow shelves, and systems that reset in a few minutes.",
    productIds: ["seagrass-baskets", "oak-shelf"],
  },
  {
    slug: "decorative-accessories",
    title: "Decorative Accessories",
    excerpt:
      "Vases, trays, and objects that add texture without visual noise.",
    image: "/images/guides/accessories.jpg",
    imageAlt: "Ceramic vases, a woven tray, and dried eucalyptus on an oak console",
    intro:
      "Accessories work best in small groups. These are the kinds of objects that can move from a dining table to a bookshelf and still look considered.",
    productIds: ["ceramic-vase-set"],
  },
  {
    slug: "bedroom-accessories",
    title: "Bedroom Accessories",
    excerpt:
      "Bedding, lamps, and small pieces that make a bedroom easier to settle into.",
    image: "/images/guides/bedroom-accessories.jpg",
    imageAlt: "A restful bedroom with linen bedding and a ceramic lamp on a nightstand",
    intro:
      "A bedroom rarely needs more furniture. It usually needs better textiles, softer light, and a nightstand that can hold what you actually use.",
    productIds: ["linen-duvet", "linen-pillow-set", "ceramic-linen-lamp"],
  },
  {
    slug: "living-room-accessories",
    title: "Living Room Accessories",
    excerpt:
      "Throws, lighting, and finishing pieces for rooms you actually sit in.",
    image: "/images/guides/living-room-accessories.jpg",
    imageAlt: "A cozy living room with a wool throw, ceramic lamp, and botanical print",
    intro:
      "Living rooms collect objects quickly. This guide highlights a few pieces that add comfort and structure without turning the coffee table into a display case.",
    productIds: ["wool-throw", "ceramic-linen-lamp", "framed-neutral-print"],
  },
];

export function getProductGuide(slug: string) {
  return productGuides.find((guide) => guide.slug === slug);
}

export function productsForGuide(slug: string) {
  const guide = getProductGuide(slug);
  if (!guide) return [];
  return guide.productIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
}
