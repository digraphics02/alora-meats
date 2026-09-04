import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ShieldCheckIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Order Confirmed — Alora Meats",
  description: "Your Alora Meats order was placed successfully.",
};

export default function ShopSuccessPage() {
  return (
    <>
      <PageHero
        title="Order Confirmed"
        crumbs={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop/" }, { label: "Success" }]}
      />
      <section className="container-page py-20 text-center">
        <div className="mx-auto flex max-w-md flex-col items-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-900 text-gold-400">
            <ShieldCheckIcon className="h-6 w-6" />
          </span>
          <p className="mt-5 font-display text-xl font-semibold text-forest-900">
            Thank you — your order is confirmed.
          </p>
          <p className="mt-2 text-sm text-ink-500">
            This is a test-mode Stripe checkout. Order confirmation emails and
            fulfillment workflow still need to be wired up before launch.
          </p>
          <Link
            href="/shop/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-sm font-semibold text-cream-50 hover:bg-forest-800"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    </>
  );
}
