'use client';

import { useTRPC } from '@/trpc/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

type UseSendVerificationEmailProps = {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};

const useSendVerificationEmail = ({ onSuccess, onError }: UseSendVerificationEmailProps = {}) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    trpc.auth.sendVerificationEmail.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(trpc.auth.getSession.queryOptions());
        onSuccess?.();
        toast.success('Verification email sent');
      },
      onError: (error) => {
        onError?.(error);
        toast.error('Failed to send verification email');
      },
    }),
  );

  return {
    sendVerificationEmail: mutation.mutateAsync,
    ...mutation,
  };
};

export default useSendVerificationEmail;
