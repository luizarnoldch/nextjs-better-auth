'use client';

import { useForm } from '@tanstack/react-form';
import { useMutation } from '@tanstack/react-query';
import type { TRPCClientErrorLike } from '@trpc/client';
import { toast } from 'sonner';
import { useTRPC } from '@/trpc/client';
import { type RequestPasswordResetType, requestPasswordResetSchema } from '../schema/auth.schema';

type UseRequestPasswordResetProps = {
  onSuccess?: () => void;
  onError?: (error: TRPCClientErrorLike<{ errorShape: unknown; transformer: false }>) => void;
};

const useRequestPasswordReset = ({ onSuccess, onError }: UseRequestPasswordResetProps = {}) => {
  const trpc = useTRPC();

  const mutation = useMutation(
    trpc.auth.requestPasswordReset.mutationOptions({
      onSuccess: () => {
        toast.success('Password reset email sent. Check your inbox.');
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message);
        onError?.(error);
      },
    }),
  );

  const form = useForm({
    defaultValues: {
      email: '',
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL ?? ''}/reset-password`,
    } as RequestPasswordResetType,
    validators: {
      onChange: requestPasswordResetSchema,
    },
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync(value);
    },
  });

  return {
    form,
    ...mutation,
  };
};

export default useRequestPasswordReset;
