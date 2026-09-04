import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site-config";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/lib/icons";

// Placeholder metadata — replace once the Contact page content doc is supplied.
export const metadata: Metadata = {
  title: "Contact — Alora Meats",
  description: "Contact Alora Meats — page content pending.",
};

const cards = [
  { icon: PinIcon, label: "Address", value: siteConfig.address },
  { icon: PhoneIcon, label: "Phone", value: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
  { icon: MailIcon, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: ClockIcon, label: "Hours", value: siteConfig.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <section className="container-page py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 rounded-2xl border border-cream-200 bg-white p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 text-gold-400">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                {label}
              </p>
              {href ? (
                <a href={href} className="text-sm font-medium text-forest-900 hover:text-maroon-600">
                  {value}
                </a>
              ) : (
                <p className="text-sm font-medium text-forest-900">{value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-medium text-forest-900">Send a message</h2>
            <p className="mt-2 text-sm text-ink-500">
              Form UI only — submission isn&apos;t wired to a backend or
              email service yet.
            </p>
            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-cream-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1.5 w-full rounded-lg border border-cream-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1.5 w-full rounded-lg border border-cream-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1.5 w-full rounded-lg border border-cream-200 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-500"
                />
              </div>
              <button
                type="button"
                disabled
                aria-disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-forest-900/50 px-7 py-3.5 text-sm font-semibold text-cream-50"
              >
                Send Message (pending backend)
              </button>
            </form>
          </div>

          <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-gold-500/60 bg-cream-100 p-10 text-center">
            <p className="font-display text-lg font-semibold text-forest-900">Map placeholder</p>
            <p className="mt-2 text-sm text-ink-500">
              An embedded map can go here once the business address is confirmed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
