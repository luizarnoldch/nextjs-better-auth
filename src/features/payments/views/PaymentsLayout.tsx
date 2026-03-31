import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { headers } from 'next/headers';
import React from 'react';

export default async function PaymentsLayout({ children }: { children: React.ReactNode }) {

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session || !session.user) {
    return null
  }

  const user = session.user

  const subscription = await prisma.userSubscription.findFirst({
    where: { userId: user.id },
    include: { subscription: true },
  })

  if (!subscription) {
    return null
  }

  return (
    <div className="not-prose @container flex flex-col gap-16 px-8 py-24 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="mb-0 text-balance font-medium text-5xl tracking-tighter!">Simple, transparent pricing</h1>
        <p className="mx-auto mt-0 mb-0 max-w-2xl text-balance text-lg text-muted-foreground">
          Managing a business is hard enough, so why not make your life easier? Our pricing plans are simple,
          transparent and scale with you.
        </p>
        <p>Subscription: {subscription.subscription.name}</p>
        {children}
      </div>
    </div>
  );
}
