import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

// Placeholder metadata — replace once the About page content doc is supplied.
export const metadata: Metadata = {
  title: "About — Alora Meats",
  description: "About Alora Meats — page content pending.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" crumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-gold-500/60 bg-cream-100 p-10 text-center">
          <p className="font-display text-lg font-semibold text-forest-900">
            Page content pending
          </p>
          <p className="mt-2 text-sm text-ink-500">
            This page is wired up and ready — the About story, team and
            imagery will be added once the content docs are supplied.
          </p>
        </div>
      </section>
    </>
  );
}
