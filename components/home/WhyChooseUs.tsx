import {
  ClockIcon,
  FlameIcon,
  LeafIcon,
  ShieldCheckIcon,
  SnowflakeIcon,
  TruckIcon,
} from "@/lib/icons";

const reasons = [
  { icon: LeafIcon, title: "100% Grass-Fed", text: "Placeholder benefit description." },
  { icon: TruckIcon, title: "Reliable Delivery", text: "Placeholder benefit description." },
  { icon: ShieldCheckIcon, title: "Quality Control", text: "Placeholder benefit description." },
  { icon: SnowflakeIcon, title: "Cold-Chain Freshness", text: "Placeholder benefit description." },
  { icon: FlameIcon, title: "Expert Butchery", text: "Placeholder benefit description." },
  { icon: ClockIcon, title: "Consistent Supply", text: "Placeholder benefit description." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-maroon-600">
            Placeholder eyebrow
          </span>
          <h2 className="mt-3 font-display text-3xl font-medium text-forest-900 sm:text-4xl">
            Why choose Alora Meats
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-cream-200 bg-white p-7 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-900 text-gold-400">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-forest-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
