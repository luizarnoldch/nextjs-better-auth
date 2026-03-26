"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const useSignOut = () => {
  const trpc = useTRPC();

  const mutation = useMutation(
    trpc.auth.signOut.mutationOptions({
      onSuccess: () => {
        toast.success("Signed out successfully");
      },
      onError: (error) => {
        toast.error(error.message || "Failed to sign out");
      },
    })
  );

  const handleSignOut = async () => {
    await mutation.mutateAsync({});
  };

  return {
    handleSignOut,
    ...mutation,
  };
};

export default useSignOut;
