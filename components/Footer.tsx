import Image from "next/image";
import Link from "next/link";
import { meatCategories, primaryNav, siteConfig } from "@/lib/site-config";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/lib/icons";

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-cream-100">
      <div className="container-page grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/alora-meats-logo.png"
            alt="Alora Meats"
            width={160}
            height={113}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/70">
            Placeholder brand blurb — final About copy to come from the
            supplied content docs.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-100/10 transition-colors hover:bg-gold-500 hover:text-forest-950"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-100/10 transition-colors hover:bg-gold-500 hover:text-forest-950"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-100/10 transition-colors hover:bg-gold-500 hover:text-forest-950"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream-100/80 hover:text-gold-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
            Our Meats
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {meatCategories.map((cat) => (
              <li key={cat.slug}>
                <Link href="/our-meats/" className="text-cream-100/80 hover:text-gold-400">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
            <li className="flex items-start gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneIcon className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={siteConfig.phoneHref} className="hover:text-gold-400">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <ClockIcon className="h-4 w-4 shrink-0 text-gold-400" />
              {siteConfig.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Alora Meats. All rights reserved.</p>
          <p>Site design in progress.</p>
        </div>
      </div>
    </footer>
  );
}
