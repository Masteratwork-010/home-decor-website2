export type CategorySlug =
  | "bedroom"
  | "living-room"
  | "organization"
  | "decor-guides";

export type RoomSlug =
  | "bedroom"
  | "living-room"
  | "home-office"
  | "dining-room"
  | "small-spaces"
  | "home-organization";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "product"; productId: string }
  | { type: "note"; text: string };

export interface Author {
  name: string;
  role: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  rooms: RoomSlug[];
  readTime: number;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  image: string;
  imageAlt: string;
  tags: string[];
  featured?: boolean;
  popular?: boolean;
  blocks: ContentBlock[];
  relatedSlugs: string[];
}

export interface Room {
  slug: RoomSlug;
  name: string;
  href: string;
  image: string;
  imageAlt: string;
  tagline: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  description: string;
  features: string[];
  bestFor: string;
  pros: string[];
  considerations: string[];
  guideSlug: string;
  /** Replace with your retailer/affiliate URL when ready. */
  affiliateUrl?: string;
}

export interface ProductGuide {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  intro: string;
  productIds: string[];
}
