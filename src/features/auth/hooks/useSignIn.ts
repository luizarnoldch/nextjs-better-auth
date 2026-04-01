'use client';

import { useTRPC } from '@/trpc/client';
import { useMutation } from '@tanstack/react-query';
import { useForm } from '@tanstack/react-form';
import { toast } from 'sonner';
import { signInSchema, type SignInType } from '../schema/auth.schema';
import { TRPCClientErrorLike } from '@trpc/client';

type UseSignInProps = {
  onSuccess?: () => void;
  onError?: (error: TRPCClientErrorLike<any>) => void;
};

const useSignIn = ({ onSuccess, onError }: UseSignInProps = {}) => {
  const trpc = useTRPC();

  const mutation = useMutation(
    trpc.auth.signIn.mutationOptions({
      onSuccess: () => {
        toast.success('Signed in successfully');
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
      password: '',
      rememberMe: true,
    } as SignInType,
    validators: {
      onChange: signInSchema,
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

export default useSignIn;
