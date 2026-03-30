'use client';

import { useTRPC } from '@/trpc/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

type UseUpdateUserImageProps = {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
};

const useUpdateUserImage = ({ onSuccess, onError }: UseUpdateUserImageProps = {}) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const mutation = useMutation(
    trpc.auth.updateUserImage.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries(trpc.auth.getSession.queryOptions());
        onSuccess?.();
        toast.success('Image updated successfully');
      },
      onError: (error) => {
        onError?.(error);
        toast.error('Failed to update image');
      },
    }),
  );

  return {
    updateUserImage: mutation.mutateAsync,
    ...mutation,
  };
};

export default useUpdateUserImage;
