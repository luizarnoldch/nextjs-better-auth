import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { authRouter } from '@/features/auth/server/auth.router';
import { paymentsRouter } from '@/features/payments/server/payments.router';

export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  auth: authRouter,
  payment: paymentsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
