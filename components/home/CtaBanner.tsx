import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { PhoneIcon } from "@/lib/icons";

export default function CtaBanner() {
  return (
    <section className="bg-maroon-700 py-16 text-cream-50">
      <div className="container-page flex flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="font-display text-2xl font-medium sm:text-3xl">
            CTA headline placeholder — ready to order?
          </h2>
          <p className="mt-2 text-sm text-cream-50/80">
            Placeholder supporting line for the closing call-to-action.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-full border border-cream-50/40 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:border-cream-50 hover:bg-cream-50/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
