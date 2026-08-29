import type { Room } from "./types";

export const rooms: Room[] = [
  {
    slug: "bedroom",
    name: "Bedroom",
    href: "/bedroom",
    image: "/images/rooms/bedroom.jpg",
    imageAlt:
      "A calm bedroom with oatmeal linen bedding, a walnut nightstand, and soft morning light",
    tagline: "Restful rooms, quietly styled",
    description:
      "Layered bedding, softer lighting, and small storage habits that make a bedroom feel finished without looking staged.",
  },
  {
    slug: "living-room",
    name: "Living Room",
    href: "/living-room",
    image: "/images/rooms/living-room.jpg",
    imageAlt:
      "A cozy living room with a cream sofa, wool throw, oak console, and warm lamp light",
    tagline: "Rooms meant for everyday living",
    description:
      "Layouts, lighting, and accessories that help a living room feel inviting on a Tuesday night — not only in photographs.",
  },
  {
    slug: "home-office",
    name: "Home Office",
    href: "/home-office",
    image: "/images/rooms/home-office.jpg",
    imageAlt:
      "A small home office with an oak desk, linen chair, brass lamp, and trailing plant",
    tagline: "Work corners that still feel like home",
    description:
      "Compact desks, calmer lighting, and storage that keeps papers out of sight so a work space can sit comfortably in a living room or bedroom.",
  },
  {
    slug: "dining-room",
    name: "Dining Room",
    href: "/dining-room",
    image: "/images/rooms/dining-room.jpg",
    imageAlt:
      "A round oak dining table with linen chairs and a ceramic centerpiece of dried flowers",
    tagline: "Tables worth lingering at",
    description:
      "Simple table settings, pendant lighting, and sideboard storage that make dining spaces feel used, warm, and easy to reset.",
  },
  {
    slug: "small-spaces",
    name: "Small Spaces",
    href: "/small-spaces",
    image: "/images/rooms/small-spaces.jpg",
    imageAlt:
      "A bright studio apartment with a compact sofa, wall shelves, and natural fiber baskets",
    tagline: "Less floor, more intention",
    description:
      "Furniture scale, visual calm, and dual-purpose storage for apartments, guest rooms, and rooms that have to do more than one job.",
  },
  {
    slug: "home-organization",
    name: "Home Organization",
    href: "/home-organization",
    image: "/images/rooms/small-spaces.jpg",
    imageAlt:
      "A tidy small-space living area with open shelves and woven storage baskets",
    tagline: "Order that still looks like a home",
    description:
      "Decluttering, closed storage, and everyday systems that keep surfaces clear without turning every room into a utility closet.",
  },
];

export function getRoom(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
