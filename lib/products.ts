// Placeholder catalog — every product, price, and weight here is a
// generic stand-in so the shop has something to display and Stripe
// Checkout has real line items to work with in test mode. Replace with
// the real product list, weights, and prices before going live.

export type Product = {
  slug: string;
  name: string;
  category: string;
  weight: string;
  priceCents: number;
  description: string;
};

export const products: Product[] = [
  {
    slug: "placeholder-beef-cut-1",
    name: "Beef Product Placeholder 1",
    category: "Beef",
    weight: "0.5 kg",
    priceCents: 1500,
    description: "Placeholder description — replace with real product copy.",
  },
  {
    slug: "placeholder-beef-cut-2",
    name: "Beef Product Placeholder 2",
    category: "Beef",
    weight: "1 kg",
    priceCents: 2800,
    description: "Placeholder description — replace with real product copy.",
  },
  {
    slug: "placeholder-poultry-1",
    name: "Poultry Product Placeholder 1",
    category: "Poultry",
    weight: "1 kg",
    priceCents: 1200,
    description: "Placeholder description — replace with real product copy.",
  },
  {
    slug: "placeholder-poultry-2",
    name: "Poultry Product Placeholder 2",
    category: "Poultry",
    weight: "0.5 kg",
    priceCents: 900,
    description: "Placeholder description — replace with real product copy.",
  },
  {
    slug: "placeholder-pork-1",
    name: "Pork Product Placeholder 1",
    category: "Pork",
    weight: "0.5 kg",
    priceCents: 1100,
    description: "Placeholder description — replace with real product copy.",
  },
  {
    slug: "placeholder-lamb-1",
    name: "Lamb Product Placeholder 1",
    category: "Lamb",
    weight: "0.5 kg",
    priceCents: 1900,
    description: "Placeholder description — replace with real product copy.",
  },
];

export function formatPrice(cents: number) {
  return (cents / 100).toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
  });
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
