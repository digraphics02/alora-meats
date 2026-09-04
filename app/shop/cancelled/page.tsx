import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Order Cancelled — Alora Meats",
  description: "Your Alora Meats checkout was cancelled.",
};

export default function ShopCancelledPage() {
  return (
    <>
      <PageHero
        title="Checkout Cancelled"
        crumbs={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop/" }, { label: "Cancelled" }]}
      />
      <section className="container-page py-20 text-center">
        <div className="mx-auto flex max-w-md flex-col items-center">
          <p className="font-display text-xl font-semibold text-forest-900">
            No charge was made.
          </p>
          <p className="mt-2 text-sm text-ink-500">
            Your cart is still saved — you can pick up where you left off.
          </p>
          <Link
            href="/shop/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-sm font-semibold text-cream-50 hover:bg-forest-800"
          >
            Back to Shop
          </Link>
        </div>
      </section>
    </>
  );
}
