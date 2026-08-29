import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "ceramic-linen-lamp",
    name: "Ceramic Table Lamp with Linen Shade",
    image: "/images/articles/nightstand-styling.jpg",
    imageAlt: "A ceramic table lamp with a linen shade on an oak nightstand",
    description:
      "A compact lamp with a ceramic base and a fabric shade that throws a warm, even pool of light. Useful on nightstands, consoles, and desks where overhead lighting feels too sharp.",
    features: [
      "Fabric shade for diffused light",
      "Weighted ceramic base",
      "Works with a warm-white bulb",
      "Suitable for nightstands and consoles",
    ],
    bestFor: "Bedrooms and living rooms that need a second layer of light",
    pros: [
      "Softens a room immediately",
      "Looks finished even when switched off",
      "Easy to move between rooms",
    ],
    considerations: [
      "Choose a shade wide enough to hide the bulb from seated eye level",
      "Pair with a dimmable warm-white bulb rather than a cool daylight bulb",
    ],
    guideSlug: "lighting",
  },
  {
    id: "paper-floor-lamp",
    name: "Sculptural Paper Floor Lamp",
    image: "/images/guides/lighting.jpg",
    imageAlt: "A softly lit dining and living space with warm pendant lighting",
    description:
      "A tall, lightweight floor lamp with a paper or parchment shade. It fills a dark corner without the visual weight of a solid metal fixture.",
    features: [
      "Tall ambient glow",
      "Lightweight shade",
      "Small floor footprint",
      "Warm, even diffusion",
    ],
    bestFor: "Corners behind sofas and reading chairs in small living rooms",
    pros: [
      "Adds height without bulk",
      "Creates evening atmosphere quickly",
      "Pairs well with wood and linen",
    ],
    considerations: [
      "Keep away from high-traffic squeeze points",
      "Use an LED bulb to keep the shade cooler",
    ],
    guideSlug: "lighting",
  },
  {
    id: "framed-neutral-print",
    name: "Framed Neutral Art Print",
    image: "/images/guides/wall-decor.jpg",
    imageAlt: "A living room wall with a large framed botanical print above a console",
    description:
      "A single large print in a simple wood or charcoal frame. One generous piece usually reads as calmer than a cluster of small frames, especially in compact rooms.",
    features: [
      "Large scale for a focal wall",
      "Simple frame profile",
      "Muted, warm palette",
      "Works above sofas, consoles, and beds",
    ],
    bestFor: "Blank walls that need one clear focal point",
    pros: [
      "Instantly organizes a wall",
      "Easy to swap the print later",
      "Does not require a full gallery layout",
    ],
    considerations: [
      "Hang so the center sits near eye level when you are standing",
      "Leave breathing room around the frame rather than crowding it with shelves",
    ],
    guideSlug: "wall-decor",
  },
  {
    id: "seagrass-baskets",
    name: "Natural Fiber Storage Baskets",
    image: "/images/guides/storage.jpg",
    imageAlt: "Woven natural fiber baskets used as storage in a small living space",
    description:
      "Open woven baskets that hide the visual noise of blankets, toys, and chargers while still looking like part of the room. A practical first step in small-space organization.",
    features: [
      "Natural seagrass or similar fiber",
      "Handles for moving between rooms",
      "Open-top for daily drop zones",
      "Works on shelves, floors, and closets",
    ],
    bestFor: "Living rooms, bedrooms, and entry drop zones",
    pros: [
      "Faster than a full closet system",
      "Looks intentional on open shelves",
      "Easy to empty and reset",
    ],
    considerations: [
      "Choose a size that actually fits your shelf depth",
      "Use a liner if you are storing small items that can slip through the weave",
    ],
    guideSlug: "storage-organization",
  },
  {
    id: "oak-shelf",
    name: "Slim Oak Wall Shelf",
    image: "/images/rooms/small-spaces.jpg",
    imageAlt: "A wall-mounted oak shelf in a compact apartment living space",
    description:
      "A shallow wood shelf that adds storage and a styling ledge without eating floor space. Useful in studios, hallways, and above desks.",
    features: [
      "Shallow depth for tight rooms",
      "Warm wood finish",
      "Holds books, ceramics, and small baskets",
      "Can be used in a pair or a trio",
    ],
    bestFor: "Small spaces that need storage off the floor",
    pros: [
      "Frees floor area",
      "Creates a collected look with a few objects",
      "Works in almost any room",
    ],
    considerations: [
      "Do not overload with too many small objects",
      "Confirm wall type before hanging",
    ],
    guideSlug: "storage-organization",
  },
  {
    id: "ceramic-vase-set",
    name: "Matte Ceramic Vase Set",
    image: "/images/articles/budget-decor.jpg",
    imageAlt: "Ceramic vases and dried stems styled on an oak console",
    description:
      "A small group of matte ceramic vessels in related shapes. They work with dried branches, a single stem, or empty — which makes them useful year-round.",
    features: [
      "Matte, unglazed or softly glazed finish",
      "Mixed heights",
      "Works with dried or fresh stems",
      "Looks complete even when empty",
    ],
    bestFor: "Consoles, dining tables, and open shelves",
    pros: [
      "Adds texture without pattern overload",
      "Easy to restyle with the seasons",
      "A few pieces can move from room to room",
    ],
    considerations: [
      "Group in odd numbers for a more natural arrangement",
      "Avoid high-gloss finishes if you want a quieter look",
    ],
    guideSlug: "decorative-accessories",
  },
  {
    id: "wool-throw",
    name: "Textured Wool Throw",
    image: "/images/articles/cozy-styling.jpg",
    imageAlt: "A cream sofa with a rust-and-cream wool throw and textured pillows",
    description:
      "A medium-weight throw with visible texture. Draped over a sofa arm or the foot of a bed, it is one of the fastest ways to make a room feel lived-in.",
    features: [
      "Visible weave or knit",
      "Warm neutral color",
      "Large enough to actually use",
      "Looks good folded or loosely draped",
    ],
    bestFor: "Sofas, reading chairs, and the foot of a bed",
    pros: [
      "Adds warmth without a full textile overhaul",
      "Hides a tired sofa cushion",
      "Easy to wash or air out",
    ],
    considerations: [
      "Choose a fiber you will actually throw in the wash",
      "One throw per seating piece is usually enough",
    ],
    guideSlug: "living-room-accessories",
  },
  {
    id: "linen-duvet",
    name: "Washed Linen Duvet Cover",
    image: "/images/rooms/bedroom.jpg",
    imageAlt: "A made bed with washed oatmeal linen and layered cream pillows",
    description:
      "A washed linen duvet in a warm oatmeal or flax tone. The slight wrinkle is the point — it makes a bed look considered without needing a hotel-tight finish.",
    features: [
      "Washed linen texture",
      "Warm neutral color",
      "Breathable for most seasons",
      "Looks better after washing",
    ],
    bestFor: "Bedrooms where you want a calm, unfussy bed",
    pros: [
      "Hides everyday wrinkles",
      "Pairs with almost any wood tone",
      "One color change can reset a whole room",
    ],
    considerations: [
      "Linen relaxes after a few washes",
      "Layer a lighter cotton sheet underneath if you sleep warm",
    ],
    guideSlug: "bedroom-accessories",
  },
  {
    id: "linen-pillow-set",
    name: "Layered Linen Pillow Set",
    image: "/images/articles/bedroom-decor-ideas.jpg",
    imageAlt: "A bed dressed with layered oatmeal linen pillows and a charcoal throw",
    description:
      "A small set of pillows in related neutrals rather than a full decorative stack. Two sleeping pillows plus one or two shams is enough for most beds.",
    features: [
      "Related neutral tones",
      "Mix of sizes",
      "Removable covers",
      "Works on beds and sofas",
    ],
    bestFor: "Beds and sofas that look unfinished with only sleeping pillows",
    pros: [
      "Quick visual upgrade",
      "Easy to swap covers seasonally",
      "Does not require a large collection",
    ],
    considerations: [
      "Too many pillows make a bed harder to use",
      "Keep patterns quiet if the rest of the room is already textured",
    ],
    guideSlug: "bedroom-accessories",
  },
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}
