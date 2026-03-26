"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { signUpSchema, type SignUpType } from "../schema/auth.schema";
import { TRPCClientErrorLike } from "@trpc/client";

type UseSignUpProps = {
  onSuccess?: () => void;
  onError?: (error: TRPCClientErrorLike<any>) => void;
};

const useSignUp = ({ onSuccess, onError }: UseSignUpProps = {}) => {
  const trpc = useTRPC();

  const mutation = useMutation(
    trpc.auth.signUp.mutationOptions({
      onSuccess: () => {
        toast.success("Account created successfully");
        onSuccess?.();
      },
      onError: (error) => {
        toast.error(error.message || "Failed to sign up");
        onError?.(error);
      },
    })
  );

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      image: null,
      rememberMe: true,
    } as SignUpType,
    validators: {
      onChange: signUpSchema,
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

export default useSignUp;
