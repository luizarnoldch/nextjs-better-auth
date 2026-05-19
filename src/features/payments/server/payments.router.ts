import { createTRPCRouter, baseProcedure, protectedProcedure } from '@/trpc/init';
import { TRPCError } from '@trpc/server';
import polar from '@/lib/polar';
import config from '@/lib/config';
import { createCheckoutLinkSchema, listProductsSchema } from '../schema/payments.schema';
import type { PolarProduct, FormattedProduct } from '../schema/payments.types';

export const paymentsRouter = createTRPCRouter({
  list: baseProcedure.input(listProductsSchema).query(async ({ input }) => {
    try {
      const organizationId = input.organizationId || config.polar.organizationId;
      const result = await polar.products.list({
        organizationId,
        sorting: ['price_amount'],
      });
      const items = result.result.items;
      const products: FormattedProduct[] = items.map((product) => {
        const p = product as PolarProduct;
        return {
          id: p.id,
          name: p.name,
          description: p.description ?? null,
          is_recurring: p.isRecurring,
          prices: p.prices.map((price) => ({
            id: price.id,
            amount_type: price.amountType,
            price_currency: price.priceCurrency || 'USD',
            price_amount: price.priceAmount || 0,
            recurring_interval: (p.recurringInterval as 'month' | 'year' | null) ?? null,
          })),
          highlights: p.benefits?.map((b) => b.description).filter((h): h is string => h !== null) || [],
        };
      });
      return products;
    } catch (error) {
      console.error('Error listing products from Polar:', error);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch products from Polar',
      });
    }
  }),

  createCheckout: protectedProcedure.input(createCheckoutLinkSchema).mutation(async ({ input }) => {
    try {
      const checkout = await polar.checkoutLinks.create({
        productPriceId: input.productPriceId,
        paymentProcessor: 'stripe',
        successUrl: input.successUrl || `${config.nextPublicAppUrl}/dashboard/payments?checkout_id={CHECKOUT_ID}`,
        returnUrl: input.returnUrl || `${config.nextPublicAppUrl}/dashboard/payments`,
      });

      return {
        url: checkout.url,
      };
    } catch (error) {
      console.error('Error creating Polar checkout:', error);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to create checkout link',
      });
    }
  }),
});
