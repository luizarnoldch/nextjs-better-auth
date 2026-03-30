'use client';

import { useTRPC } from '@/trpc/client';
import { useMutation } from '@tanstack/react-query';
import { useForm } from '@tanstack/react-form';
import { CreateCheckoutLinkInput, createCheckoutLinkSchema } from '../schema/payments.schema';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface UseCreateCheckoutLinkProps {
  onSuccess?: (url: string) => void;
}

export function useCreateCheckoutLink({ onSuccess }: UseCreateCheckoutLinkProps = {}) {
  const trpc = useTRPC();
  const router = useRouter();

  const mutation = useMutation(
    trpc.payment.createCheckout.mutationOptions({
      onSuccess: (data) => {
        toast.success('Checkout link created!');
        form.reset();
        if (onSuccess) {
          onSuccess(data.url);
        } else {
          // Redirection should be handled usually by the caller but let's provide a default
          window.location.href = data.url;
        }
      },
      onError: (error) => {
        console.error('Checkout creation error:', error);
        toast.error('Failed to create checkout link. Please try again.');
      },
    }),
  );

  const form = useForm({
    defaultValues: {
      productPriceId: '',
      successUrl: undefined,
      returnUrl: undefined,
    } as CreateCheckoutLinkInput,
    validators: {
      onChange: createCheckoutLinkSchema,
    },
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync(value);
    },
  });

  return {
    form,
    ...mutation,
  };
}
