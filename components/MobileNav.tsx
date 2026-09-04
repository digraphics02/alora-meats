"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/lib/site-config";
import { MenuIcon, CloseIcon } from "@/lib/icons";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-forest-900"
      >
        {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {open && (
        <nav
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-t border-cream-200 bg-cream-50 shadow-lg"
        >
          <ul className="container-page flex flex-col divide-y divide-cream-200 py-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-medium text-ink-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
