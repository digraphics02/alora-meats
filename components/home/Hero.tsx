import Link from "next/link";
import { ChevronRightIcon, LeafIcon } from "@/lib/icons";

const stats = [
  { value: "25+", label: "Years of craft" },
  { value: "100%", label: "Quality sourced" },
  { value: "500+", label: "Clients served" },
  { value: "30+", label: "Cuts & products" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-cream-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-gold-400) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-maroon-600/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="container-page relative flex flex-col items-start gap-8 py-24 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400">
          <LeafIcon className="h-3.5 w-3.5" />
          Placeholder eyebrow — e.g. Since [year]
        </span>

        <h1 className="max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
          Hero headline placeholder — premium, ethically sourced meats
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-cream-100/75 sm:text-lg">
          Placeholder supporting paragraph. Final hero copy, headline and
          messaging will come from the supplied content docs and replace this
          text.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/our-meats/"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
          >
            Explore Our Meats
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href="/about/"
            className="inline-flex items-center gap-2 rounded-full border border-cream-100/30 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:border-cream-100 hover:bg-cream-100/5"
          >
            Learn About Us
          </Link>
        </div>

        <dl className="mt-6 grid w-full max-w-2xl grid-cols-2 gap-6 border-t border-cream-100/10 pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-2xl font-medium text-gold-400 sm:text-3xl">
                {stat.value}
              </dd>
              <dd className="mt-1 text-xs text-cream-100/60">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
