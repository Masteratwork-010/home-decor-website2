export const SITE = {
  name: "BetterDecor",
  tagline: "Beautiful Ideas for a Better Home",
  description:
    "Discover inspiring décor ideas, practical room guides, organization tips, and carefully selected products to help you create a home you love.",
  url: "",
  pinterestUrl: "https://www.pinterest.com/betterdecor",
  instagramUrl: "https://www.instagram.com/betterdecor",
  email: "hello@betterdecor.com",
} as const;

export const NAV_PRIMARY = [
  { label: "Bedroom", href: "/bedroom" },
  { label: "Living Room", href: "/living-room" },
  { label: "Small Spaces", href: "/small-spaces" },
  { label: "Décor Ideas", href: "/decor-ideas" },
  { label: "Product Guides", href: "/product-guides" },
] as const;

export const NAV_MORE = [
  { label: "Home Office", href: "/home-office" },
  { label: "Dining Room", href: "/dining-room" },
  { label: "Home Organization", href: "/home-organization" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_NAV = [
  { label: "Home", href: "/" },
  { label: "Bedroom", href: "/bedroom" },
  { label: "Living Room", href: "/living-room" },
  { label: "Home Office", href: "/home-office" },
  { label: "Small Spaces", href: "/small-spaces" },
  { label: "Home Organization", href: "/home-organization" },
  { label: "Décor Ideas", href: "/decor-ideas" },
  { label: "Product Guides", href: "/product-guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const LEGAL_NAV = [
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;

export const CATEGORIES = [
  {
    slug: "bedroom",
    name: "Bedroom",
    href: "/bedroom",
    description: "Calm, restful rooms with practical styling ideas.",
  },
  {
    slug: "living-room",
    name: "Living Room",
    href: "/living-room",
    description: "Gathering spaces that feel warm, useful, and collected.",
  },
  {
    slug: "organization",
    name: "Organization",
    href: "/home-organization",
    description: "Storage and decluttering that still looks considered.",
  },
  {
    slug: "decor-guides",
    name: "Décor Guides",
    href: "/decor-ideas",
    description: "Budget, minimalist, and room-styling playbooks.",
  },
] as const;

export function pageTitle(title?: string) {
  return title
    ? `${title} | BetterDecor`
    : "BetterDecor | Beautiful Ideas for a Better Home";
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}
