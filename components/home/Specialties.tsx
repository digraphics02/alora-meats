import Link from "next/link";
import { ChevronRightIcon, CleaverIcon } from "@/lib/icons";

const specialties = [
  { title: "Specialty Placeholder 01", text: "Placeholder description of this featured cut or service." },
  { title: "Specialty Placeholder 02", text: "Placeholder description of this featured cut or service." },
  { title: "Specialty Placeholder 03", text: "Placeholder description of this featured cut or service." },
];

export default function Specialties() {
  return (
    <section className="bg-forest-950 py-20 text-cream-50 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Placeholder eyebrow
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
              Featured specialties
            </h2>
          </div>
          <Link
            href="/our-meats/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300"
          >
            View all our meats
            <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cream-100/10 bg-cream-50/5 p-8 transition-colors hover:border-gold-500/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                <CleaverIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream-100/65">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
