import z from 'zod';

export const signInSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
  rememberMe: z.boolean(),
});

export type SignInType = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  image: z.instanceof(File).optional().nullable(),
  rememberMe: z.boolean(),
});

export type SignUpType = z.infer<typeof signUpSchema>;

export const signOutSchema = z.object({});
export type SignOutType = z.infer<typeof signOutSchema>;

export const requestPasswordResetSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  redirectTo: z.url().optional(),
});
export type RequestPasswordResetType = z.infer<typeof requestPasswordResetSchema>;

export const resetPasswordSchema = z.object({
  token: z.string(),
  newPassword: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});
export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, { message: 'Current password is required' }),
  newPassword: z.string().min(8, { message: 'New password must be at least 8 characters' }),
  revokeOtherSessions: z.boolean().optional(),
});
export type ChangePasswordType = z.infer<typeof changePasswordSchema>;

export const updateUserSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).optional(),
  image: z.string().nullable().optional(),
});
export type UpdateUserType = z.infer<typeof updateUserSchema>;

export const sendVerificationEmailSchema = z.object({
  email: z.email({ message: 'Invalid email address' }),
  callbackURL: z.string().min(1, { message: 'Callback URL is required' }),
});
export type SendVerificationEmailType = z.infer<typeof sendVerificationEmailSchema>;

export const updateUserImageSchema = z.object({
  image: z.string().nullable(),
});
export type UpdateUserImageType = z.infer<typeof updateUserImageSchema>;
