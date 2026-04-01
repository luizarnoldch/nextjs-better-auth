import { z } from 'zod';

export const listProductsSchema = z.object({
  organizationId: z.string().optional(),
});

export const createCheckoutLinkSchema = z.object({
  productPriceId: z.string(),
  successUrl: z.string().optional(),
  returnUrl: z.string().optional(),
});

export type ListProductsInput = z.infer<typeof listProductsSchema>;
export type CreateCheckoutLinkInput = z.infer<typeof createCheckoutLinkSchema>;

// Types for the UI mapping
export interface PolarProductPrice {
  id: string;
  amount_type: string;
  price_currency: string;
  price_amount: number;
  recurring_interval: 'month' | 'year' | null;
}

export interface PolarProduct {
  id: string;
  name: string;
  description: string | null;
  is_recurring: boolean;
  prices: PolarProductPrice[];
  highlights: string[];
}
