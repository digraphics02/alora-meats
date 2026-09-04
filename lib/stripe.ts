import Stripe from "stripe";

// STRIPE_SECRET_KEY must be set in .env.local (test key while building,
// live key only once the store is actually ready to take real payments).
export const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;
