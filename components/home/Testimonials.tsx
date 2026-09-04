import { QuoteIcon, StarIcon } from "@/lib/icons";

const testimonials = [
  { name: "Placeholder Name", role: "Customer", quote: "Placeholder testimonial quote goes here, to be replaced with a real customer review." },
  { name: "Placeholder Name", role: "Customer", quote: "Placeholder testimonial quote goes here, to be replaced with a real customer review." },
  { name: "Placeholder Name", role: "Customer", quote: "Placeholder testimonial quote goes here, to be replaced with a real customer review." },
];

export default function Testimonials() {
  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-maroon-600">
            Placeholder eyebrow
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-forest-900 sm:text-4xl">
            What our customers say
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-cream-200 bg-white p-8"
            >
              <QuoteIcon className="h-7 w-7 text-gold-500" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="h-4 w-4 text-gold-500" />
                ))}
              </div>
              <figcaption className="mt-3">
                <p className="font-display text-sm font-semibold text-forest-900">{t.name}</p>
                <p className="text-xs text-ink-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
