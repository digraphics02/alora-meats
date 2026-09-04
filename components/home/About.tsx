import Link from "next/link";
import { CleaverIcon, LeafIcon } from "@/lib/icons";

const features = [
  "Premium Cuts",
  "Quality Sourcing",
  "Custom Butchering",
  "Guaranteed Freshness",
];

export default function About() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-forest-900">
            <div
              aria-hidden
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, var(--color-gold-400) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <CleaverIcon className="h-24 w-24 text-gold-500/70" />
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-xl bg-forest-950/80 px-4 py-3 text-xs text-cream-100/70 backdrop-blur">
              Image placeholder — swap for real brand/product photography.
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-cream-200 bg-cream-50 px-6 py-5 shadow-lg sm:block">
            <p className="font-display text-3xl font-semibold text-forest-900">25+</p>
            <p className="text-xs text-ink-500">Years of experience</p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-maroon-600">
            <LeafIcon className="h-4 w-4" />
            Placeholder eyebrow — About Alora Meats
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-forest-900 sm:text-4xl">
            About section headline placeholder
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-700">
            Placeholder paragraph describing the Alora Meats story, sourcing
            philosophy and craftsmanship. This will be replaced with the
            About copy supplied in the content docs.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 rounded-lg bg-cream-100 px-4 py-3 text-sm font-medium text-forest-900"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href="/about/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-800"
          >
            More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
