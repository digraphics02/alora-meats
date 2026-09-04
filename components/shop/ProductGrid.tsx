"use client";

import { useCart } from "@/lib/cart-context";
import { formatPrice, type Product } from "@/lib/products";
import { CleaverIcon } from "@/lib/icons";

export default function ProductGrid({ products }: { products: Product[] }) {
  const { add } = useCart();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.slug}
          className="flex flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white"
        >
          <div className="flex aspect-[4/3] items-center justify-center bg-forest-900">
            <CleaverIcon className="h-10 w-10 text-gold-500/60" />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-maroon-600">
              {product.category}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-forest-900">
              {product.name}
            </h3>
            <p className="mt-2 text-sm text-ink-500">{product.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-ink-500">{product.weight}</span>
              <span className="font-display text-lg font-semibold text-forest-900">
                {formatPrice(product.priceCents)}
              </span>
            </div>
            <button
              type="button"
              onClick={() => add(product.slug)}
              className="mt-4 rounded-full bg-forest-900 px-5 py-2.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
