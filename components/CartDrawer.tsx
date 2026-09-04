"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice, getProductBySlug } from "@/lib/products";
import { CartIcon, CloseIcon, MinusIcon, PlusIcon, TrashIcon } from "@/lib/icons";

export default function CartDrawer() {
  const [open, setOpen] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { lines, itemCount, subtotalCents, setQty, remove } = useCart();

  async function checkout() {
    setError(null);
    setCheckingOut(true);
    try {
      const res = await fetch("/api/checkout/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lines }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Checkout failed.");
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed.");
      setCheckingOut(false);
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Open cart"
        onClick={() => setOpen(true)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full text-forest-900 transition-colors hover:bg-cream-100"
      >
        <CartIcon className="h-5 w-5" />
        {itemCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-maroon-600 text-[10px] font-bold text-cream-50">
            {itemCount}
          </span>
        )}
      </button>

      {open && (
        <>
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-forest-950/50"
          />
          <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-cream-200 px-5 py-4">
              <h2 className="font-display text-lg font-semibold text-forest-900">
                Your Cart
              </h2>
              <button
                type="button"
                aria-label="Close cart"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-cream-100"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {lines.length === 0 ? (
                <p className="text-sm text-ink-500">Your cart is empty.</p>
              ) : (
                <ul className="space-y-5">
                  {lines.map((line) => {
                    const product = getProductBySlug(line.slug);
                    if (!product) return null;
                    return (
                      <li key={line.slug} className="flex items-center gap-3">
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-forest-900">
                            {product.name}
                          </p>
                          <p className="text-xs text-ink-500">
                            {product.weight} · {formatPrice(product.priceCents)}
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() => setQty(line.slug, line.qty - 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-cream-200 hover:border-gold-500"
                            >
                              <MinusIcon className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-5 text-center text-sm">{line.qty}</span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() => setQty(line.slug, line.qty + 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-cream-200 hover:border-gold-500"
                            >
                              <PlusIcon className="h-3.5 w-3.5" />
                            </button>
                            <button
                              type="button"
                              aria-label={`Remove ${product.name}`}
                              onClick={() => remove(line.slug)}
                              className="ml-auto flex h-7 w-7 items-center justify-center rounded-full text-ink-500 hover:text-maroon-600"
                            >
                              <TrashIcon className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="border-t border-cream-200 px-5 py-5">
              <div className="flex items-center justify-between text-sm font-semibold text-forest-900">
                <span>Subtotal</span>
                <span>{formatPrice(subtotalCents)}</span>
              </div>
              <p className="mt-1 text-xs text-ink-500">
                Taxes and delivery calculated at checkout.
              </p>
              {error && <p className="mt-2 text-xs text-maroon-600">{error}</p>}
              <button
                type="button"
                onClick={checkout}
                disabled={lines.length === 0 || checkingOut}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {checkingOut ? "Redirecting…" : "Checkout"}
              </button>
              <Link
                href="/shop/"
                onClick={() => setOpen(false)}
                className="mt-3 block text-center text-xs font-semibold text-ink-500 hover:text-forest-900"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
