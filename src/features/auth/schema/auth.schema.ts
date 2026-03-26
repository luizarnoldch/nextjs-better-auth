import z from "zod";

export const signInSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean(),
});

export type SignInType = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  image: z.instanceof(File).optional().nullable(),
  rememberMe: z.boolean(),
});

export type SignUpType = z.infer<typeof signUpSchema>;

export const signOutSchema = z.object({});
export type SignOutType = z.infer<typeof signOutSchema>;
