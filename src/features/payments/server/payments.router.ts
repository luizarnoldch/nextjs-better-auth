import { createTRPCRouter, baseProcedure, protectedProcedure } from '@/trpc/init';
import { TRPCError } from '@trpc/server';
import polar from '@/lib/polar';
import config from '@/lib/config';
import { createCheckoutLinkSchema, listProductsSchema } from '../schema/payments.schema';

export const paymentsRouter = createTRPCRouter({
  list: baseProcedure.input(listProductsSchema).query(async ({ input }) => {
    try {
      const organizationId = input.organizationId || config.polar.organizationId;
      const result = await polar.products.list({
        organizationId,
        sorting: ['price_amount'],
      });
      const items = result.result.items;
      const products = items.map((product: any) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        is_recurring: product.isRecurring,
        prices: product.prices.map((p: any) => ({
          id: p.id,
          amount_type: p.amountType,
          price_currency: p.priceCurrency || 'USD',
          price_amount: p.priceAmount || 0,
          recurring_interval: product.recurringInterval,
        })),
        highlights: product.benefits?.map((b: any) => b.description) || [],
      }));
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
