import Link from "next/link";
import { ChevronRightIcon } from "@/lib/icons";

const popularLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Our Meats", href: "/our-meats/" },
  { label: "Contact", href: "/contact/" },
];

export default function NotFound() {
  return (
    <section className="bg-forest-950 py-28 text-cream-50">
      <div className="container-page flex flex-col items-center text-center">
        <p className="font-display text-7xl font-semibold text-gold-400">404</p>
        <h1 className="mt-4 font-display text-2xl font-medium sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-sm text-cream-100/70">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {popularLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-cream-100/25 px-5 py-2.5 text-sm font-medium transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                {link.label}
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
