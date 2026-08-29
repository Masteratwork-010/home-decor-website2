import type { Article, CategorySlug, RoomSlug } from "./types";

const author = {
  name: "Maya Ellison",
  role: "Editorial stylist",
};

export const articles: Article[] = [
  {
    slug: "10-simple-bedroom-decor-ideas",
    title: "10 Simple Bedroom Décor Ideas That Feel Finished",
    excerpt:
      "Small, practical changes — lighting, bedding, and nightstand styling — that make a bedroom feel calmer without a full redesign.",
    category: "bedroom",
    rooms: ["bedroom"],
    readTime: 8,
    publishedAt: "2026-03-12",
    author,
    image: "/images/articles/bedroom-decor-ideas.jpg",
    imageAlt:
      "A made bed with oatmeal linen, a charcoal throw, and matching ceramic lamps",
    tags: ["bedroom décor", "bedding", "lighting"],
    popular: true,
    relatedSlugs: [
      "small-bedroom-organization-ideas",
      "how-to-style-a-nightstand",
      "cozy-home-styling-ideas",
    ],
    blocks: [
      {
        type: "p",
        text: "A bedroom does not need a new headboard, a gallery wall, and a full furniture swap to feel better. Most rooms improve when the bed looks considered, the light is warmer, and the surfaces hold fewer stray objects. The ideas below are meant to be done in an afternoon, not a renovation.",
      },
      {
        type: "h2",
        id: "start-with-the-bed",
        text: "Start with the bed, not the walls",
      },
      {
        type: "p",
        text: "The bed is the largest object in the room, so it sets the tone. A washed linen or cotton duvet in a warm neutral — oatmeal, flax, stone — will do more than a patterned comforter that fights the rest of the space. Add two sleeping pillows in simple shams and one extra pillow in a related tone. That is enough.",
      },
      {
        type: "ul",
        items: [
          "Choose one textile family: linen, cotton, or a mix of the two.",
          "Keep the palette to two or three related neutrals.",
          "Fold a throw at the foot rather than layering five decorative pillows.",
          "Let the duvet rumple slightly. A too-tight hotel finish can feel stiff at home.",
        ],
      },
      {
        type: "h2",
        id: "light-the-room-twice",
        text: "Light the room twice",
      },
      {
        type: "p",
        text: "Overhead lighting is useful for making the bed and finding socks. It is rarely the light you want at 9 p.m. A pair of lamps — matching or close in height — on the nightstands gives the room a second, softer layer. If you only have one nightstand, a single lamp plus a dimmable overhead bulb is still an improvement.",
      },
      { type: "product", productId: "ceramic-linen-lamp" },
      {
        type: "h2",
        id: "ten-ideas",
        text: "Ten ideas worth trying",
      },
      {
        type: "ol",
        items: [
          "Swap a cool-white bulb for a warm-white LED (around 2700K).",
          "Hang curtains high and wide so the window feels larger.",
          "Add a rug that the front feet of the bed can sit on.",
          "Style one nightstand and leave the other simpler.",
          "Use a tray or shallow dish for jewelry, lip balm, and rings.",
          "Move the laundry basket out of the main sightline.",
          "Hang one piece of art above the bed, centered, with breathing room.",
          "Add a plant or a vase of dried grass for a living edge.",
          "Choose matching or related lampshades even if the bases differ.",
          "Clear the top of the dresser except for three objects.",
        ],
      },
      {
        type: "h2",
        id: "what-to-skip",
        text: "What to skip",
      },
      {
        type: "p",
        text: "Skip themed décor, overly matching furniture sets, and anything you have to move every night to get into bed. A bedroom should be easy to reset in the morning. If a styling idea fails that test, it does not belong here.",
      },
      {
        type: "quote",
        text: "The most restful bedrooms are the ones you can tidy in five minutes.",
      },
    ],
  },
  {
    slug: "15-small-living-room-ideas",
    title: "15 Small Living Room Ideas That Add Space, Not Stuff",
    excerpt:
      "Furniture scale, lighting, and layout ideas for compact living rooms that still need to host, rest, and store everyday life.",
    category: "living-room",
    rooms: ["living-room", "small-spaces"],
    readTime: 9,
    publishedAt: "2026-02-26",
    author,
    image: "/images/articles/small-living-room.jpg",
    imageAlt:
      "A compact living room with a two-seat cream sofa, round oak table, and tall bookshelf",
    tags: ["small living room", "layout", "apartments"],
    popular: true,
    relatedSlugs: [
      "small-space-storage-that-looks-beautiful",
      "cozy-home-styling-ideas",
      "budget-friendly-home-decor-ideas",
    ],
    blocks: [
      {
        type: "p",
        text: "A small living room fails when the furniture is a size too big, the paths are blocked, or every surface is asked to display something. It succeeds when you can walk through it, sit comfortably, and put things away. Scale and editing matter more than a new color story.",
      },
      {
        type: "h2",
        id: "measure-before-you-buy",
        text: "Measure before you buy",
      },
      {
        type: "p",
        text: "A sofa that looked modest in a warehouse can swallow a 10-foot wall. Measure the room, then measure the path around the sofa. You want at least a comfortable walkway on the main route through the space. A two-seat sofa and a pair of chairs often live better than a deep sectional in a compact room.",
      },
      {
        type: "h2",
        id: "choose-legs-and-round-tables",
        text: "Choose legs and round tables",
      },
      {
        type: "p",
        text: "Furniture on legs lets the floor continue underneath, which makes a room feel larger. A round coffee table is easier to move around than a sharp rectangle and usually leaves better walking space in tight layouts.",
      },
      {
        type: "ul",
        items: [
          "Pull the sofa slightly off the wall if the room allows — even a few inches helps.",
          "Use a slim console behind the sofa if you need a landing spot for lamps and keys.",
          "Mount the television or choose a smaller media unit so the floor stays open.",
          "Let one wall stay quieter so the room can breathe.",
        ],
      },
      {
        type: "h2",
        id: "fifteen-ideas",
        text: "Fifteen ideas for compact living rooms",
      },
      {
        type: "ol",
        items: [
          "Pick a sofa with a low back and visible legs.",
          "Use a round coffee table or two smaller nesting tables.",
          "Hang curtains at the ceiling, not at the window frame.",
          "Choose one large piece of art instead of many small frames.",
          "Add a floor lamp in a dark corner rather than more overhead light.",
          "Keep the rug large enough that front furniture legs sit on it.",
          "Use a wall-mounted shelf instead of a deep bookcase if the room is narrow.",
          "Store throws in a lidded basket rather than over every chair.",
          "Limit the coffee table to a tray, a book, and one object.",
          "Paint or keep walls in a light, warm neutral so daylight carries.",
          "Use a mirror opposite a window, not opposite clutter.",
          "Choose side tables that can also hold a lamp and a cup.",
          "Keep pathways clear — no extra ottoman in the walkway.",
          "Let the television wall be simple if the sofa wall is already styled.",
          "Edit accessories seasonally instead of adding year after year.",
        ],
      },
      { type: "product", productId: "wool-throw" },
      {
        type: "p",
        text: "If you only do three things: scale the sofa correctly, add a second light source, and clear the coffee table. Those changes are visible from the doorway, which is how a small living room is usually judged.",
      },
    ],
  },
  {
    slug: "budget-friendly-home-decor-ideas",
    title: "Budget-Friendly Home Décor Ideas That Still Look Considered",
    excerpt:
      "Where to spend, where to wait, and how to use paint, textiles, and secondhand finds without making a room look temporary.",
    category: "decor-guides",
    rooms: ["living-room", "bedroom", "small-spaces"],
    readTime: 7,
    publishedAt: "2026-01-18",
    author,
    image: "/images/articles/budget-decor.jpg",
    imageAlt:
      "A console styled with ceramic vases, a leaning framed print, and dried eucalyptus",
    tags: ["budget décor", "secondhand", "styling"],
    popular: true,
    relatedSlugs: [
      "minimalist-home-decor-ideas",
      "wall-decor-ideas-that-feel-collected",
      "10-simple-bedroom-decor-ideas",
    ],
    blocks: [
      {
        type: "p",
        text: "Budget décor goes wrong when every surface is filled with inexpensive objects that do not relate to each other. It goes right when you buy fewer things, in better materials, and give them space. You do not need a matching set. You need a consistent palette and a few pieces with real texture.",
      },
      {
        type: "h2",
        id: "spend-on-touchpoints",
        text: "Spend on what you touch",
      },
      {
        type: "p",
        text: "If money is limited, put it toward the things your hands meet every day: a lamp you switch on, a throw you actually use, a duvet you sleep under. Decorative objects can come from thrift stores, family shelves, and the garden. The room will still feel finished because the main surfaces feel good.",
      },
      {
        type: "h2",
        id: "a-simple-palette",
        text: "Keep a simple palette",
      },
      {
        type: "p",
        text: "Choose three colors and stay near them: a warm wall or textile base, a wood tone, and one quieter accent (sage, clay, or charcoal). When everything sits in the same family, mixed sources look intentional instead of accidental.",
      },
      {
        type: "ul",
        items: [
          "Paint is still one of the highest-impact, lowest-cost changes.",
          "Secondhand wood furniture usually looks better than new composite pieces.",
          "One larger artwork beats a wall of small posters.",
          "Dried branches, olive stems, or grocery-store flowers in a simple vase are enough.",
          "Swap lampshades before you swap lamps.",
        ],
      },
      { type: "product", productId: "ceramic-vase-set" },
      {
        type: "h2",
        id: "what-not-to-fake",
        text: "What not to fake",
      },
      {
        type: "p",
        text: "Avoid décor that imitates a trend too literally — faux designer logos, overly distressed signs, and plastic versions of natural materials. If you cannot buy the real fiber or wood yet, leave the surface empty. Empty is calmer than a substitute that will bother you in six months.",
      },
      {
        type: "note",
        text: "BetterDecor product notes describe materials and use. They are not reviews, prices, or availability claims. Replace placeholder links with your own retailer URLs when you are ready.",
      },
    ],
  },
  {
    slug: "minimalist-home-decor-ideas",
    title: "Minimalist Home Décor Ideas for Rooms You Actually Live In",
    excerpt:
      "A practical approach to minimalism: fewer objects, warmer materials, and storage that makes empty surfaces possible.",
    category: "decor-guides",
    rooms: ["living-room", "bedroom", "small-spaces"],
    readTime: 8,
    publishedAt: "2026-04-02",
    author,
    image: "/images/articles/minimalist-decor.jpg",
    imageAlt:
      "A minimal living space with a linen armchair, oak bench, and a single ceramic bowl",
    tags: ["minimalist décor", "editing", "calm interiors"],
    popular: true,
    relatedSlugs: [
      "budget-friendly-home-decor-ideas",
      "small-space-storage-that-looks-beautiful",
      "10-simple-bedroom-decor-ideas",
    ],
    blocks: [
      {
        type: "p",
        text: "Minimalism at home is not a white room with one chair. It is the ability to put things away so the room can stay quiet. If a space has nowhere for the mail, the cups, and the charging cables, it will never look minimal for more than an hour.",
      },
      {
        type: "h2",
        id: "edit-then-warm",
        text: "Edit first, then add warmth",
      },
      {
        type: "p",
        text: "Remove the extras before you buy anything new. Then bring back texture: linen, wool, unfinished wood, matte ceramic. A sparse room with only hard, shiny surfaces feels cold. A sparse room with a few honest materials feels restful.",
      },
      {
        type: "h2",
        id: "closed-storage",
        text: "Give clutter a door",
      },
      {
        type: "p",
        text: "Open shelves are only minimal if they hold a short, repeating set of objects. Everyday life belongs in drawers, cabinets, and lidded boxes. Once those exist, you can leave a tabletop almost empty and it will stay that way.",
      },
      {
        type: "ul",
        items: [
          "One sofa, one table, one light, one piece of art is a complete living room.",
          "Repeat materials instead of introducing a new finish in every corner.",
          "Leave at least one wall mostly blank.",
          "Choose larger objects over many small ones.",
          "If you add something, let something else leave.",
        ],
      },
      {
        type: "quote",
        text: "A minimal room is not empty. It is finished enough that you stop adding.",
      },
      {
        type: "h2",
        id: "a-weekend-reset",
        text: "A weekend reset",
      },
      {
        type: "ol",
        items: [
          "Clear every horizontal surface.",
          "Put back only what you used in the last week.",
          "Group remaining objects in one tray or on one shelf.",
          "Hide cords as far as you reasonably can.",
          "Stop when the room feels easier to walk through.",
        ],
      },
    ],
  },
  {
    slug: "small-bedroom-organization-ideas",
    title: "Small Bedroom Organization Ideas That Free the Floor",
    excerpt:
      "Closet habits, nightstand limits, and vertical storage for bedrooms that have to hold clothes, rest, and a little life on the side.",
    category: "organization",
    rooms: ["bedroom", "small-spaces", "home-organization"],
    readTime: 7,
    publishedAt: "2026-03-28",
    author,
    image: "/images/articles/bedroom-organization.jpg",
    imageAlt:
      "A calm bedroom with a made bed, walnut nightstand, and uncluttered surfaces",
    tags: ["bedroom organization", "small bedroom", "storage"],
    popular: true,
    relatedSlugs: [
      "10-simple-bedroom-decor-ideas",
      "small-space-storage-that-looks-beautiful",
      "how-to-style-a-nightstand",
    ],
    blocks: [
      {
        type: "p",
        text: "A small bedroom feels chaotic when clothes, chargers, and laundry compete with the bed. Organization here is less about pretty boxes and more about deciding what is allowed to live in the room at all. If it is not worn, read, or used at night, it may belong somewhere else.",
      },
      {
        type: "h2",
        id: "the-nightstand-rule",
        text: "The nightstand rule",
      },
      {
        type: "p",
        text: "Give the nightstand a short list: lamp, book, water, and one dish for small items. Everything else — mail, hair tools, vitamins, headphones — needs a drawer or a different room. A crowded nightstand makes the whole bedroom feel unfinished.",
      },
      { type: "product", productId: "seagrass-baskets" },
      {
        type: "h2",
        id: "use-the-vertical",
        text: "Use the wall and the closet first",
      },
      {
        type: "ul",
        items: [
          "Hooks on the back of the door for robes and bags.",
          "A single row of matching hangers so the closet reads as one material.",
          "Folded stacks of the same category, not mixed piles.",
          "A lidded hamper so laundry is not a visual event.",
          "Under-bed storage only for things you rarely need, in low-profile boxes.",
        ],
      },
      {
        type: "h2",
        id: "keep-the-floor-clear",
        text: "Keep the floor clear",
      },
      {
        type: "p",
        text: "In a small bedroom, floor space is rest. Shoes in a rack or basket, not in a line along the wall. If you work in the bedroom, a slim desk that can close or a wall-mounted shelf is better than a folding table that never folds.",
      },
      {
        type: "note",
        text: "Organization ideas on BetterDecor are about daily habits and furniture scale, not a promise that any product will transform a room on its own.",
      },
    ],
  },
  {
    slug: "cozy-home-styling-ideas",
    title: "Cozy Home Styling Ideas That Do Not Feel Heavy",
    excerpt:
      "How to add warmth with light, textiles, and quieter color — without turning every room into a cabin set.",
    category: "living-room",
    rooms: ["living-room", "bedroom"],
    readTime: 6,
    publishedAt: "2026-01-09",
    author,
    image: "/images/articles/cozy-styling.jpg",
    imageAlt:
      "A living room in warm evening light with a cream sofa, wool throw, and ceramic lamp",
    tags: ["cozy home", "lighting", "textiles"],
    popular: true,
    relatedSlugs: [
      "warm-lighting-ideas-for-every-room",
      "15-small-living-room-ideas",
      "minimalist-home-decor-ideas",
    ],
    blocks: [
      {
        type: "p",
        text: "Cozy is often mistaken for more: more pillows, more blankets, more brown. In practice, cozy is a room that invites you to sit down. That usually comes from warm light, a few soft textiles, and furniture arranged for conversation rather than display.",
      },
      {
        type: "h2",
        id: "light-before-textiles",
        text: "Fix the light before you buy more throws",
      },
      {
        type: "p",
        text: "A bright, cool overhead bulb will fight every cozy object you add. Switch to warm-white bulbs, add a lamp at sitting height, and dim the overhead if you can. The room will feel softer before a single pillow arrives.",
      },
      { type: "product", productId: "wool-throw" },
      {
        type: "h2",
        id: "texture-not-clutter",
        text: "Texture, not clutter",
      },
      {
        type: "ul",
        items: [
          "One wool or cotton throw per seating piece.",
          "A rug large enough to gather the furniture.",
          "Curtains that actually close, in a fabric with some weight.",
          "A tray for candles so they do not scatter across the table.",
          "Wood, ceramic, and linen repeated in more than one place.",
        ],
      },
      {
        type: "p",
        text: "If a room still feels cold after the lighting is right, look at the floor and the windows. Bare floors and uncovered glass lose warmth quickly. A rug and a curtain panel are more effective than another decorative object on the shelf.",
      },
    ],
  },
  {
    slug: "how-to-style-a-nightstand",
    title: "How to Style a Nightstand So It Works in the Morning",
    excerpt:
      "A simple formula for lamps, trays, and the few objects a nightstand actually needs — plus what to leave in the drawer.",
    category: "bedroom",
    rooms: ["bedroom"],
    readTime: 6,
    publishedAt: "2026-04-19",
    author,
    image: "/images/articles/nightstand-styling.jpg",
    imageAlt:
      "A close view of a ceramic lamp, books, and a bud vase on an oak nightstand",
    tags: ["nightstand", "bedroom styling", "small surfaces"],
    featured: true,
    relatedSlugs: [
      "10-simple-bedroom-decor-ideas",
      "small-bedroom-organization-ideas",
      "warm-lighting-ideas-for-every-room",
    ],
    blocks: [
      {
        type: "p",
        text: "A nightstand has a job: hold a light, a book, water, and the small things you reach for before sleep. When it also holds mail, chargers in a knot, and three half-used candles, the bedroom looks busier than it is. Styling a nightstand well is mostly editing.",
      },
      {
        type: "h2",
        id: "the-formula",
        text: "A formula that holds up",
      },
      {
        type: "p",
        text: "Use four parts: a lamp, a stack, a living or sculptural object, and a catch-all. The lamp should be tall enough that the shade sits above the mattress. The stack can be two books. The object can be a small vase or a ceramic dish. The catch-all is a tray or shallow bowl for rings, balm, and a watch.",
      },
      {
        type: "image",
        src: "/images/rooms/bedroom.jpg",
        alt: "A bedroom with a walnut nightstand, ceramic lamp, and a small vase of dried grass",
        caption: "Keep the lamp dominant. Everything else should sit lower than the shade.",
      },
      { type: "product", productId: "ceramic-linen-lamp" },
      {
        type: "h2",
        id: "what-goes-in-the-drawer",
        text: "What belongs in the drawer",
      },
      {
        type: "ul",
        items: [
          "Charging cables and extra lip balm",
          "Medicines and earplugs",
          "A notebook if you do not write every night",
          "Anything you would not want a guest to see from the doorway",
        ],
      },
      {
        type: "h2",
        id: "if-you-have-no-drawer",
        text: "If you have no drawer",
      },
      {
        type: "p",
        text: "Use a lidded box on the lower shelf, or a small basket that can slide underneath. The surface still needs to stay short. A nightstand without storage is not an invitation to pile — it is a reason to keep even less out.",
      },
      {
        type: "quote",
        text: "If you cannot set a glass of water down without moving three things, the nightstand is overstyled.",
      },
    ],
  },
  {
    slug: "warm-lighting-ideas-for-every-room",
    title: "Warm Lighting Ideas for Every Room",
    excerpt:
      "How to layer overhead, lamp, and accent light so rooms feel usable at night and gentle in the evening.",
    category: "decor-guides",
    rooms: ["living-room", "bedroom", "dining-room", "home-office"],
    readTime: 8,
    publishedAt: "2026-02-08",
    author,
    image: "/images/articles/warm-lighting.jpg",
    imageAlt: "A dining room with a warm pendant light over a round oak table",
    tags: ["lighting", "lamps", "ambiance"],
    relatedSlugs: [
      "cozy-home-styling-ideas",
      "how-to-style-a-nightstand",
      "15-small-living-room-ideas",
    ],
    blocks: [
      {
        type: "p",
        text: "Most rooms have one light, in the ceiling, and it is too bright. Warm lighting is not a mood board — it is a second and third source of light at the height where you actually sit. Once those exist, you can keep the overhead for cleaning and cooking.",
      },
      {
        type: "h2",
        id: "three-layers",
        text: "Three layers, used simply",
      },
      {
        type: "ol",
        items: [
          "Overhead: a ceiling fixture or recessed lights on a dimmer, with a warm bulb.",
          "Task: a table lamp, floor lamp, or pendant over a table.",
          "Accent: a small lamp on a shelf, picture light, or candles on a tray.",
        ],
      },
      {
        type: "p",
        text: "You do not need all three in every room. A bedroom can live on two lamps. A living room usually wants a floor lamp and a table lamp. A dining room wants a pendant that sits low enough to feel intimate but high enough that you can see the people across from you.",
      },
      { type: "product", productId: "paper-floor-lamp" },
      {
        type: "h2",
        id: "bulbs-matter",
        text: "The bulb matters more than the fixture",
      },
      {
        type: "p",
        text: "Look for a warm-white LED, roughly 2700K, with a high color rendering if you can find it. Avoid daylight bulbs in living rooms and bedrooms. They are useful in laundry rooms and sometimes in kitchens, not next to a sofa.",
      },
      {
        type: "h2",
        id: "room-by-room",
        text: "A quick room-by-room pass",
      },
      {
        type: "ul",
        items: [
          "Bedroom: matching or related lamps, shade below eye level when you sit up in bed.",
          "Living room: one lamp near the sofa, one in a dark corner.",
          "Dining room: a single pendant or a pair, dimmable.",
          "Home office: a task lamp that does not bounce on the screen, plus softer ambient light.",
        ],
      },
    ],
  },
  {
    slug: "wall-decor-ideas-that-feel-collected",
    title: "Wall Décor Ideas That Feel Collected, Not Cluttered",
    excerpt:
      "How to hang art, mirrors, and quiet objects so a wall looks finished without a full gallery grid.",
    category: "decor-guides",
    rooms: ["living-room", "bedroom", "home-office"],
    readTime: 7,
    publishedAt: "2026-03-04",
    author,
    image: "/images/articles/wall-decor.jpg",
    imageAlt: "A living room wall with a large framed botanical print above a console",
    tags: ["wall décor", "art", "styling"],
    relatedSlugs: [
      "budget-friendly-home-decor-ideas",
      "minimalist-home-decor-ideas",
      "15-small-living-room-ideas",
    ],
    blocks: [
      {
        type: "p",
        text: "Walls look cluttered when every frame is small, every object is different, and nothing has been given enough space. They look collected when you choose a scale, a palette, and a little empty plaster around the edges.",
      },
      {
        type: "h2",
        id: "one-large-piece",
        text: "Start with one large piece",
      },
      {
        type: "p",
        text: "Above a sofa, bed, or console, one generously sized print or mirror will organize the wall faster than a cluster of small frames. Hang it so the center sits near standing eye level, and leave a hand’s width of space between the furniture and the bottom of the frame.",
      },
      { type: "product", productId: "framed-neutral-print" },
      {
        type: "h2",
        id: "if-you-want-a-group",
        text: "If you want a group",
      },
      {
        type: "ul",
        items: [
          "Use the same frame finish, or two finishes that clearly relate.",
          "Keep a consistent gap between frames — two fingers is a useful start.",
          "Align either the centers or the top edge, not both at random.",
          "Stop at three to five pieces unless you are building a true grid.",
        ],
      },
      {
        type: "h2",
        id: "what-to-leave-blank",
        text: "What to leave blank",
      },
      {
        type: "p",
        text: "Not every wall needs art. A window wall, a wall with a doorway, and a wall that already has open shelves can often stay quieter. The empty wall is what makes the chosen piece feel important.",
      },
    ],
  },
  {
    slug: "small-space-storage-that-looks-beautiful",
    title: "Small-Space Storage That Still Looks Beautiful",
    excerpt:
      "Closed storage, honest baskets, and shallow shelves for apartments and rooms that have to work harder.",
    category: "organization",
    rooms: ["small-spaces", "home-organization", "living-room"],
    readTime: 7,
    publishedAt: "2026-04-08",
    author,
    image: "/images/articles/small-space-storage.jpg",
    imageAlt:
      "A compact apartment with wall-mounted oak shelves and natural fiber baskets",
    tags: ["storage", "small spaces", "organization"],
    relatedSlugs: [
      "small-bedroom-organization-ideas",
      "15-small-living-room-ideas",
      "minimalist-home-decor-ideas",
    ],
    blocks: [
      {
        type: "p",
        text: "In a small home, storage that looks like storage — plastic towers, open wire racks, a different bin in every color — quickly becomes the décor, whether you meant it to or not. The better approach is to hide the ugly and let a few useful objects stay visible.",
      },
      {
        type: "h2",
        id: "closed-first",
        text: "Closed storage first",
      },
      {
        type: "p",
        text: "A sideboard, a lidded bench, or a wardrobe will always beat a row of open cubes for everyday mess. If you only add one piece, make it something with a door. Then the baskets and shelves can hold the things you do not mind seeing.",
      },
      { type: "product", productId: "oak-shelf" },
      {
        type: "h2",
        id: "baskets-with-a-job",
        text: "Baskets with a job",
      },
      {
        type: "p",
        text: "A basket without a job becomes a junk drawer with handles. Assign each one: throws, toys, shoes, mail to sort. Natural fiber reads as part of the room; just make sure the size matches the shelf, not the other way around.",
      },
      { type: "product", productId: "seagrass-baskets" },
      {
        type: "h2",
        id: "go-vertical",
        text: "Go vertical, not deeper",
      },
      {
        type: "ul",
        items: [
          "Shallow wall shelves instead of a deep bookcase in a narrow room.",
          "Hooks in a line rather than a standing coat rack in the walkway.",
          "A rail or pegboard in a home office nook.",
          "The top of a wardrobe for seasonal storage in labeled boxes.",
        ],
      },
      {
        type: "p",
        text: "Leave walking space. Storage that you have to sidestep every day will not get used, and unused storage is only furniture in the way.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug) {
  return articles.filter((article) => article.category === category);
}

export function getArticlesByRoom(room: RoomSlug) {
  return articles.filter((article) => article.rooms.includes(room));
}

export function getLatestArticles(limit = 6) {
  return [...articles]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}

export function getPopularArticles() {
  return articles.filter((article) => article.popular);
}

export function getFeaturedArticle() {
  return articles.find((article) => article.featured) ?? articles[0];
}

export function getRelatedArticles(article: Article) {
  return article.relatedSlugs
    .map((slug) => getArticle(slug))
    .filter((item): item is Article => Boolean(item));
}

export function searchArticles(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return articles.filter((article) => {
    const haystack = [
      article.title,
      article.excerpt,
      article.tags.join(" "),
      article.category,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function tocFromArticle(article: Article) {
  return article.blocks
    .filter((block): block is Extract<Article["blocks"][number], { type: "h2" }> => {
      return block.type === "h2";
    })
    .map((block) => ({ id: block.id, text: block.text }));
}
