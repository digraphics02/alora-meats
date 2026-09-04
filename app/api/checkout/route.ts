import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";

type CheckoutBody = {
  lines: { slug: string; qty: number }[];
};

export async function POST(request: Request) {
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe isn't configured yet (missing STRIPE_SECRET_KEY)." },
      { status: 503 }
    );
  }

  const body = (await request.json()) as CheckoutBody;
  const lines = Array.isArray(body?.lines) ? body.lines : [];

  const line_items = lines
    .map((line) => {
      const product = getProductBySlug(line.slug);
      if (!product || line.qty < 1) return null;
      return {
        quantity: line.qty,
        price_data: {
          currency: "cad",
          unit_amount: product.priceCents,
          product_data: { name: `${product.name} (${product.weight})` },
        },
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  if (line_items.length === 0) {
    return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
  }

  const origin = request.headers.get("origin") ?? new URL(request.url).origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    success_url: `${origin}/shop/success/`,
    cancel_url: `${origin}/shop/cancelled/`,
  });

  return NextResponse.json({ url: session.url });
}
