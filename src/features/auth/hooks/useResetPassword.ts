'use client';

import { useForm } from '@tanstack/react-form';
import { useMutation } from '@tanstack/react-query';
import type { TRPCClientErrorLike } from '@trpc/client';
import { toast } from 'sonner';
import { useTRPC } from '@/trpc/client';
import { type ResetPasswordType, resetPasswordSchema } from '../schema/auth.schema';

type UseResetPasswordProps = {
  token: string;
  onSuccess?: () => void;
  onError?: (error: TRPCClientErrorLike<{ errorShape: unknown; transformer: false }>) => void;
};

const useResetPassword = ({ token, onSuccess, onError }: UseResetPasswordProps) => {
  const trpc = useTRPC();

  const mutation = useMutation(
    trpc.auth.resetPassword.mutationOptions({
      onSuccess: () => {
        toast.success('Password reset successfully. You can now sign in.');
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
      token,
      newPassword: '',
    } as ResetPasswordType,
    validators: {
      onChange: resetPasswordSchema,
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

export default useResetPassword;
