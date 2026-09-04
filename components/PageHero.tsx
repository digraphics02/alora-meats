import Breadcrumbs from "@/components/Breadcrumbs";

export default function PageHero({
  title,
  crumbs,
}: {
  title: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-forest-950 text-cream-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-gold-400) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-page relative flex flex-col gap-4 py-16 sm:py-20">
        <Breadcrumbs items={crumbs} />
        <h1 className="font-display text-3xl font-medium sm:text-4xl">{title}</h1>
      </div>
    </section>
  );
}
