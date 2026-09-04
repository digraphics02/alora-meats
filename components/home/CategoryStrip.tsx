import Link from "next/link";
import { meatCategories } from "@/lib/site-config";
import { CleaverIcon } from "@/lib/icons";

export default function CategoryStrip() {
  return (
    <section className="border-b border-cream-200 bg-cream-50">
      <div className="container-page -mt-12 relative z-10 pb-16 sm:-mt-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {meatCategories.map((cat) => (
            <Link
              key={cat.slug}
              href="/our-meats/"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-cream-200 bg-white px-4 py-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-gold-500 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-forest-950">
                <CleaverIcon className="h-5 w-5" />
              </span>
              <span className="font-display text-sm font-semibold text-forest-900">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
