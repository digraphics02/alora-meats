import Link from "next/link";
import { meatCategories } from "@/lib/site-config";
import { CleaverIcon } from "@/lib/icons";

export default function CategoryStrip() {
  return (
    <section className="border-b border-cream-200 bg-cream-50">
      <div className="container-page -mt-12 relative z-10 pb-16 sm:-mt-16">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 rounded-3xl border border-cream-200 bg-white px-6 py-10 shadow-sm sm:gap-x-14">
          {meatCategories.map((cat) => (
            <Link
              key={cat.slug}
              href="/our-meats/"
              className="group flex w-20 flex-col items-center gap-3 text-center"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-cream-100 text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-forest-950">
                <CleaverIcon className="h-7 w-7" />
              </span>
              <span className="font-display text-xs font-semibold uppercase tracking-wide text-forest-900">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
