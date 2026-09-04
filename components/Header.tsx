import Image from "next/image";
import Link from "next/link";
import { primaryNav, siteConfig } from "@/lib/site-config";
import { ChevronRightIcon, FacebookIcon, InstagramIcon, LinkedinIcon, PhoneIcon } from "@/lib/icons";
import MobileNav from "@/components/MobileNav";
import SearchNav from "@/components/SearchNav";

const utilityLinks = [
  { label: "Help", href: "/contact/" },
  { label: "Support", href: "/contact/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  return (
    <header className="relative z-50">
      <div className="hidden bg-forest-950 text-cream-100 md:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            {utilityLinks.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-gold-400">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-gold-400"
            >
              <PhoneIcon className="h-3.5 w-3.5 text-gold-400" />
              {siteConfig.phoneDisplay}
            </a>
            <div className="flex items-center gap-3 border-l border-cream-100/20 pl-5">
              <a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-gold-400">
                <FacebookIcon className="h-3.5 w-3.5" />
              </a>
              <a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-gold-400">
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>
              <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="hover:text-gold-400">
                <LinkedinIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
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

          <div className="flex items-center gap-2">
            <SearchNav />
            <Link
              href="/contact/"
              className="hidden items-center gap-2 rounded bg-gold-500 px-5 py-2.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400 sm:inline-flex"
            >
              Order Now
              <ChevronRightIcon className="h-4 w-4" />
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
