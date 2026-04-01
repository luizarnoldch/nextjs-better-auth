import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import HydratePayments from '../hooks/HydratePayments';
import PaymentsLayout from './PaymentsLayout';
import ProductList from '../components/ProductList';
import { Loader2 } from 'lucide-react';

export default function PaymentsView() {
  return (
    <HydratePayments>
      <PaymentsLayout>
        <ErrorBoundary
          fallback={
            <div className="p-8 text-center text-destructive">
              Something went wrong while loading the pricing plans.
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="flex items-center justify-center p-24">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
              </div>
            }
          >
            <ProductList />
          </Suspense>
        </ErrorBoundary>
      </PaymentsLayout>
    </HydratePayments>
  );
}
