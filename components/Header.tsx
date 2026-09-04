import Image from "next/image";
import Link from "next/link";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { MailIcon, PhoneIcon, PinIcon } from "@/lib/icons";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  return (
    <header className="relative z-50">
      <div className="hidden bg-forest-950 text-cream-100 md:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <PinIcon className="h-3.5 w-3.5 text-gold-400" />
              {siteConfig.address}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MailIcon className="h-3.5 w-3.5 text-gold-400" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400">
                {siteConfig.email}
              </a>
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5">
            <PhoneIcon className="h-3.5 w-3.5 text-gold-400" />
            <a href={siteConfig.phoneHref} className="hover:text-gold-400">
              {siteConfig.phoneDisplay}
            </a>
          </span>
        </div>
      </div>

      <div className="border-b border-cream-200 bg-cream-50">
        <div className="container-page flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/alora-meats-logo.png"
              alt="Alora Meats"
              width={160}
              height={113}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display text-sm font-medium tracking-wide text-forest-900 transition-colors hover:text-maroon-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.phoneHref}
              className="hidden items-center gap-2 rounded-full bg-forest-900 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-800 sm:inline-flex"
            >
              <PhoneIcon className="h-4 w-4 text-gold-400" />
              {siteConfig.phoneDisplay}
            </a>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
