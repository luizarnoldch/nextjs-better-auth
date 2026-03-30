'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useListProducts } from '../hooks/useListProducts';
import ProductCard from './ProductCard';
import ContactCard from './ContactCard';
import { ErrorBoundary } from 'react-error-boundary';
import { Loader2 } from 'lucide-react';

export default function ProductList() {
  const [frequency, setFrequency] = useState<'month' | 'year'>('month');
  const { data: products, isLoading, isError } = useListProducts();

  if (isLoading) {
    return (
      <div className="flex h-48 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError) {
    return <div className="p-4 text-center text-destructive">Failed to load products. Please try again later.</div>;
  }

  if (!products || products.length === 0) {
    return <div className="p-4 text-center">No products found.</div>;
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-6xl">
      <Tabs value={frequency} onValueChange={(v) => setFrequency(v as 'month' | 'year')}>
        <TabsList>
          <TabsTrigger value="month">Monthly</TabsTrigger>
          <TabsTrigger value="year">
            Yearly
            <Badge variant="secondary" className="ml-2">
              20% off
            </Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="mt-8 grid w-full @2xl:grid-cols-3 gap-6">
        {products
          ?.reduce((acc: any[], product) => {
            const existing = acc.find((p) => p.name === product.name);
            if (existing) {
              existing.prices = [...existing.prices, ...product.prices];
              // Merge highlights and remove duplicates
              existing.highlights = Array.from(
                new Set([...(existing.highlights || []), ...(product.highlights || [])]),
              );
              return acc;
            }
            return [...acc, { ...product }];
          }, [])
          .map((product) => (
            <ProductCard key={product.id} product={product} frequency={frequency} />
          ))}
        <ContactCard />
      </div>
    </div>
  );
}
