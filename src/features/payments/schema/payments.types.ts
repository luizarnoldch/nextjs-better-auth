export type PolarProduct = {
  id: string;
  name: string;
  description?: string | null;
  isRecurring: boolean;
  prices: PolarPrice[];
  benefits?: PolarBenefit[] | null;
  recurringInterval?: string | null;
};

export type PolarPrice = {
  id: string;
  amountType: string;
  priceCurrency?: string | null;
  priceAmount?: number | null;
};

export type PolarBenefit = {
  id: string;
  description?: string | null;
};

export type FormattedProduct = {
  id: string;
  name: string;
  description: string | null;
  is_recurring: boolean;
  prices: FormattedPrice[];
  highlights: string[];
};

export type FormattedPrice = {
  id: string;
  amount_type: string;
  price_currency: string;
  price_amount: number;
  recurring_interval: 'month' | 'year' | null;
};
