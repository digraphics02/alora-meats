import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/shop/ProductGrid";
import { products } from "@/lib/products";

// Placeholder metadata — replace once real shop content/SEO copy is supplied.
export const metadata: Metadata = {
  title: "Shop — Alora Meats",
  description: "Shop Alora Meats — placeholder catalog, pending real product data.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero title="Shop" crumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <section className="container-page py-16">
        <div className="mx-auto mb-10 max-w-2xl rounded-2xl border border-dashed border-gold-500/60 bg-cream-100 p-6 text-center text-sm text-ink-700">
          Every product, weight, and price below is placeholder test data so
          checkout can be demoed end-to-end. Swap in the real catalog before
          launch, and switch the Stripe key from test to live.
        </div>
        <ProductGrid products={products} />
      </section>
    </>
  );
}
