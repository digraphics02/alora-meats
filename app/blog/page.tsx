import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

// Placeholder metadata — replace once blog content/posts are supplied.
export const metadata: Metadata = {
  title: "Blog — Alora Meats",
  description: "Alora Meats blog — page content pending.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-gold-500/60 bg-cream-100 p-10 text-center">
          <p className="font-display text-lg font-semibold text-forest-900">
            No posts yet
          </p>
          <p className="mt-2 text-sm text-ink-500">
            This page is wired up and ready — posts will appear here once
            article content is supplied.
          </p>
        </div>
      </section>
    </>
  );
}
