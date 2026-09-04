import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { meatCategories } from "@/lib/site-config";
import { CleaverIcon } from "@/lib/icons";

// Placeholder metadata — replace once the Our Meats page content doc is supplied.
export const metadata: Metadata = {
  title: "Our Meats — Alora Meats",
  description: "Our Meats at Alora Meats — page content pending.",
};

export default function OurMeatsPage() {
  return (
    <>
      <PageHero
        title="Our Meats"
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Meats" }]}
      />
      <section className="container-page py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {meatCategories.map((cat) => (
            <div
              key={cat.slug}
              className="flex flex-col items-start gap-3 rounded-2xl border border-cream-200 bg-white p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-900 text-gold-400">
                <CleaverIcon className="h-5 w-5" />
              </span>
              <h2 className="font-display text-lg font-semibold text-forest-900">
                {cat.name}
              </h2>
              <p className="text-sm text-ink-500">
                Category description pending final content docs.
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-dashed border-gold-500/60 bg-cream-100 p-10 text-center">
          <p className="font-display text-lg font-semibold text-forest-900">
            Full product/category pages pending
          </p>
          <p className="mt-2 text-sm text-ink-500">
            Dedicated pages per category (e.g. /our-meats/beef/) will be
            built once product content and imagery are supplied.
          </p>
          <Link
            href="/contact/"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-forest-800"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
