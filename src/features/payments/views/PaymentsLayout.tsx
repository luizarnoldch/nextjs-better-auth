import React from 'react';

export default function PaymentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose @container flex flex-col gap-16 px-8 py-24 text-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="mb-0 text-balance font-medium text-5xl tracking-tighter!">Simple, transparent pricing</h1>
        <p className="mx-auto mt-0 mb-0 max-w-2xl text-balance text-lg text-muted-foreground">
          Managing a business is hard enough, so why not make your life easier? Our pricing plans are simple,
          transparent and scale with you.
        </p>
        {children}
      </div>
    </div>
  );
}
