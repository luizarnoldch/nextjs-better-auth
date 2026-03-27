Viewed email-password.md:1-534

Based on the Email & Password PRD and the project's tech stack (Next.js, Better Auth, Prisma, Shadcn UI, Resend), here are the features and implementation steps possible to add. 

I have organized them into logical modules. Please check the ones you would like to prioritize:

### 1. Core Authentication UI & Logic
- [x] **Sign Up Flow**: Implementation of the registration form using Shadcn UI and TanStack Form with Zod validation.
- [x] **Sign In Flow**: Implementation of the login form including "Remember Me" functionality and comprehensive error handling.
- [x] **Sign Out**: Global sign-out component or utility with post-logout redirection logic.
- [x] **Auth Middleware**: Integration with Next.js middleware to protect private routes based on session state.

### 2. Email Verification System
- [x] **Resend Integration**: Implementation of the `sendVerificationEmail` function using the project's Resend client.
- [ ] **Verification Page**: A dedicated route (`/verify-email`) to handle the verification token and display success/error states.
- [ ] **Require Verification**: Server-side configuration to block access for unverified users.
- [ ] **Manual Trigger UI**: A "Resend Verification Email" button for users who didn't receive the initial link.
  
### 3. Password Management
- [ ] **Forgot Password**: Form to request a reset link via email.
- [ ] **Reset Password Page**: Secure page to choose a new password using the provided token.
- [ ] **Change Password**: Settings UI for authenticated users to update their password (requires current password verification).
- [ ] **Security Notifications**: Implementation of the `onPasswordReset` callback to notify users of successful changes.

### 4. Advanced Security & Plugins
- [ ] **Email Enumeration Protection**: Implementation of `customSyntheticUser` and `onExistingUserSignUp` to prevent user discovery attacks.
- [ ] **Rate Limiting**: Integration of rate limiting specifically for auth-related endpoints.
- [ ] **Argon2 Hashing**: Upgrading the default password hashing from `scrypt` to `argon2id` (as recommended in the PRD).
- [ ] **Multi-Factor Authentication (MFA)**: Adding the Better Auth `two-factor` plugin for TOTP or email-based secondary verification.

### 5. Identity & Extensibility
- [ ] **Username Support**: Integrating the `username` plugin to allow logging in with either email or a unique handle.
- [ ] **Admin Features**: Adding the `admin` plugin for user management, banning, and role assignment.
- [ ] **Account Linking**: Preparing the architecture to support OAuth providers (Google, GitHub, etc.) alongside email/password.

Which of these would you like to start with?