'use client';

import { useTRPC } from '@/trpc/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from '@tanstack/react-form';
import { updateUserSchema, type UpdateUserType } from '../schema/auth.schema';
import { toast } from 'sonner';

type UseUpdateUserProps = {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};

const useUpdateUser = ({ onSuccess, onError }: UseUpdateUserProps = {}) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    trpc.auth.updateUser.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(trpc.auth.getSession.queryOptions());
        onSuccess?.();
        form.reset();
        toast.success('User updated successfully');
      },
      onError: (error) => {
        onError?.(error);
        toast.error('Failed to update user');
      },
    }),
  );

  const form = useForm({
    defaultValues: {
      name: undefined,
      image: undefined,
    } as UpdateUserType,
    validators: {
      onChange: updateUserSchema,
    },
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync(value);
    },
  });

  return {
    form,
    mutation,
    updateUser: mutation.mutateAsync,
    ...mutation,
  };
};

export default useUpdateUser;
