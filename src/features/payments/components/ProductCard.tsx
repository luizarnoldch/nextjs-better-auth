'use client';

import NumberFlow from '@number-flow/react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, BadgeCheck, Loader2 } from 'lucide-react';
import type { PolarProduct } from '../schema/payments.schema';
import { useCreateCheckoutLink } from '../hooks/useCreateCheckoutLink';

interface ProductCardProps {
  product: PolarProduct;
  frequency: 'month' | 'year';
}

export default function ProductCard({ product, frequency }: ProductCardProps) {
  const { mutateAsync, isPending } = useCreateCheckoutLink();

  // Find price for the selected frequency
  const price =
    product.prices.find((p) => p.recurring_interval === frequency) ||
    (product.prices[0]?.amount_type === 'free'
      ? product.prices[0]
      : product.prices.find((p) => p.recurring_interval === 'month')) ||
    product.prices[0];

  const handleSubscribe = async () => {
    if (!price) return;
    await mutateAsync({
      productPriceId: price.id,
    });
  };

  const isPopular = product.name.toLowerCase().includes('pro'); // Heuristic for popular badge

  return (
    <Card
      className={cn('relative w-full text-left flex flex-col justify-between', isPopular && 'ring-2 ring-primary')}
      key={product.id}
    >
      {isPopular && (
        <Badge className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 rounded-full">Popular</Badge>
      )}
      <CardHeader>
        <CardTitle className="font-medium text-xl">{product.name}</CardTitle>
        <CardDescription>
          <div className="min-h-12">{product.description}</div>
          {price ? (
            <div className="flex flex-col mt-2">
              <NumberFlow
                className="font-medium text-foreground text-2xl"
                format={{
                  style: 'currency',
                  currency: price.price_currency,
                  maximumFractionDigits: 0,
                }}
                value={price.price_amount / 100} // Polar prices are in subunits
              />
              <span className="text-sm text-muted-foreground">per {frequency === 'month' ? 'month' : 'year'}</span>
            </div>
          ) : (
            <span className="font-medium text-foreground">Contact us for pricing.</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2 grow">
        {product.highlights?.map((highlight: string, index: number) => (
          <div className="flex gap-2 text-muted-foreground text-sm" key={index}>
            <BadgeCheck className="h-4 w-4 flex-none text-primary" />
            {highlight}
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={isPopular ? 'default' : 'secondary'}
          onClick={handleSubscribe}
          disabled={isPending || !price}
        >
          {isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <>
              Get {product.name}
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
