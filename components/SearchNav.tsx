"use client";

import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { primaryNav } from "@/lib/site-config";
import { SearchIcon, CloseIcon } from "@/lib/icons";

export default function SearchNav() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return primaryNav.filter((item) => item.label.toLowerCase().includes(q));
  }, [query]);

  function toggle() {
    setOpen((v) => {
      const next = !v;
      if (next) requestAnimationFrame(() => inputRef.current?.focus());
      return next;
    });
  }

  function go(href: string) {
    router.push(href);
    setOpen(false);
    setQuery("");
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={open ? "Close search" : "Search the site"}
        aria-expanded={open}
        onClick={toggle}
        className="flex h-10 w-10 items-center justify-center rounded-full text-forest-900 transition-colors hover:bg-cream-100"
      >
        {open ? <CloseIcon className="h-5 w-5" /> : <SearchIcon className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-72 rounded-xl border border-cream-200 bg-white p-3 shadow-lg">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && matches[0]) go(matches[0].href);
              if (e.key === "Escape") setOpen(false);
            }}
            placeholder="Search pages…"
            className="w-full rounded-lg border border-cream-200 px-3 py-2 text-sm text-ink-900 outline-none focus:border-gold-500"
          />
          {query && (
            <ul className="mt-2 divide-y divide-cream-100">
              {matches.length > 0 ? (
                matches.map((item) => (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => go(item.href)}
                      className="block w-full py-2 text-left text-sm text-ink-700 hover:text-maroon-600"
                    >
                      {item.label}
                    </button>
                  </li>
                ))
              ) : (
                <li className="py-2 text-sm text-ink-500">No pages found.</li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
