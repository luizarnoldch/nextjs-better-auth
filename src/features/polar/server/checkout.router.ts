import { createTRPCRouter } from "@/trpc/init";

export const polarRouter = createTRPCRouter({
  createCheckoutSession: baseProcedure
    .input(createCheckoutSessionSchema)
    .mutation(async ({ input }) => {
      try {
        const response = await auth.api.signInEmail({
          body: {
            email: input.email,
            password: input.password,
            rememberMe: input.rememberMe,
          },
          headers: await headers(),
        });
        return response;
      } catch (error: any) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: error.message || "Invalid credentials",
        });
      }
    }),
});
