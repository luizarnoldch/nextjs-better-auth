// import { beforeAll, afterAll, vi } from "vitest";

// /**
//  * Mock Setup Template
//  *
//  * This template provides shared mock setup that can be reused
//  * across multiple test files for consistent mocking patterns.
//  */

// // ============================================================================
// // ENVIRONMENT MOCKS
// // ============================================================================

// export function setupEnvironmentMocks() {
//   const env = {
//     AUTH_SECRET: "test-secret-key-minimum-32-characters-long",
//     AUTH_URL: "http://localhost:3000",
//     DATABASE_URL: "postgresql://test:test@localhost:5432/test_db",
//     NODE_ENV: "test",
//   };

//   Object.assign(process.env, env);
//   return env;
// }

// // ============================================================================
// // API MOCKS
// // ============================================================================

// export function setupFetchMocks() {
//   const originalFetch = global.fetch;

//   global.fetch = vi.fn(async (url: string, options?: RequestInit) => {
//     // Mock successful API responses
//     if (typeof url === "string" && url.includes("/api")) {
//       return {
//         ok: true,
//         status: 200,
//         json: async () => ({ success: true }),
//       } as Response;
//     }

//     // Fall back to original fetch
//     return originalFetch(url, options);
//   });

//   return {
//     mockFetch: global.fetch as any,
//     restore: () => {
//       vi.restoreAllMocks();
//       (global.fetch as any) = originalFetch;
//     },
//   };
// }

// // ============================================================================
// // NEXT.JS MOCKS
// // ============================================================================

// export function setupNextMocks() {
//   vi.mock("next/router", () => ({
//     useRouter: vi.fn(() => ({
//       push: vi.fn(),
//       pathname: "/",
//       query: {},
//       asPath: "/",
//     })),
//   }));

//   vi.mock("next/navigation", () => ({
//     useRouter: vi.fn(() => ({
//       push: vi.fn(),
//       back: vi.fn(),
//       forward: vi.fn(),
//     })),
//     useSearchParams: vi.fn(() => new URLSearchParams()),
//     usePathname: vi.fn(() => "/"),
//   }));

//   vi.mock("next/image", () => ({
//     default: ({ src, alt }: { src: string; alt: string }) => {
//       // Return a simple img tag in tests
//       return `<img src="${src}" alt="${alt}" />`;
//     },
//   }));
// }

// // ============================================================================
// // SERVICE MOCKS
// // ============================================================================

// export function setupServiceMocks() {
//   return {
//     // Mock email service
//     mockEmailService: () => {
//       vi.mock("@/lib/email", () => ({
//         sendVerificationEmail: vi.fn().mockResolvedValue({ id: "email123" }),
//         sendPasswordResetEmail: vi.fn().mockResolvedValue({ id: "email456" }),
//         sendInvitationEmail: vi.fn().mockResolvedValue({ id: "email789" }),
//       }));
//     },

//     // Mock storage service
//     mockStorageService: () => {
//       vi.mock("@/lib/storage", () => ({
//         uploadFile: vi.fn().mockResolvedValue({
//           url: "https://example.com/file.jpg",
//           size: 1024,
//         }),
//         deleteFile: vi.fn().mockResolvedValue(true),
//       }));
//     },

//     // Mock payment service
//     mockPaymentService: () => {
//       vi.mock("@/lib/payment", () => ({
//         createCheckoutSession: vi.fn().mockResolvedValue({
//           id: "session123",
//           url: "https://checkout.example.com",
//         }),
//         getSubscription: vi.fn().mockResolvedValue({
//           id: "sub123",
//           status: "active",
//           currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
//         }),
//       }));
//     },
//   };
// }

// // ============================================================================
// // DATABASE MOCKS WITH PRISMA
// // ============================================================================

// export function setupPrismaMocks() {
//   const mockPrisma = {
//     user: {
//       findUnique: vi.fn(),
//       findMany: vi.fn(),
//       create: vi.fn(),
//       update: vi.fn(),
//       delete: vi.fn(),
//       deleteMany: vi.fn(),
//     },
//     session: {
//       create: vi.fn(),
//       findUnique: vi.fn(),
//       delete: vi.fn(),
//       deleteMany: vi.fn(),
//     },
//     organization: {
//       create: vi.fn(),
//       findUnique: vi.fn(),
//       update: vi.fn(),
//     },
//     $transaction: vi.fn(),
//     $disconnect: vi.fn(),
//   };

//   return mockPrisma;
// }

// // ============================================================================
// // AUTH MOCKS
// // ============================================================================

// export function setupAuthMocks() {
//   return {
//     // Mock authenticated user
//     mockAuthenticatedUser: (overrides = {}) => ({
//       id: "user123",
//       email: "test@example.com",
//       name: "Test User",
//       emailVerified: true,
//       twoFactorEnabled: false,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       ...overrides,
//     }),

//     // Mock session
//     mockSession: (overrides = {}) => ({
//       user: {
//         id: "user123",
//         email: "test@example.com",
//         name: "Test User",
//       },
//       expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
//       ...overrides,
//     }),

//     // Mock JWT token
//     mockJWTToken: (payload = {}) => {
//       const header = Buffer.from(JSON.stringify({ alg: "HS256" })).toString(
//         "base64",
//       );
//       const body = Buffer.from(
//         JSON.stringify({ sub: "user123", ...payload }),
//       ).toString("base64");
//       const signature = "mock-signature";
//       return `${header}.${body}.${signature}`;
//     },
//   };
// }

// // ============================================================================
// // FORM MOCKS
// // ============================================================================

// export function setupFormMocks() {
//   return {
//     // Mock form submission
//     mockFormSubmit: (data = {}) => ({
//       preventDefault: vi.fn(),
//       target: {
//         elements: {
//           email: { value: "test@example.com", ...data },
//         },
//       },
//     }),

//     // Mock form validation
//     mockFormValidation: () => ({
//       validateEmail: vi.fn((email: string) =>
//         /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
//       ),
//       validatePassword: vi.fn((password: string) => password.length >= 8),
//     }),
//   };
// }

// // ============================================================================
// // REACT QUERY MOCKS
// // ============================================================================

// export function setupQueryMocks() {
//   vi.mock("@tanstack/react-query", () => ({
//     useQuery: vi.fn(() => ({
//       data: undefined,
//       isLoading: false,
//       error: null,
//       refetch: vi.fn(),
//     })),
//     useMutation: vi.fn(() => ({
//       mutate: vi.fn(),
//       isLoading: false,
//       error: null,
//     })),
//     QueryClient: class {
//       prefetchQuery = vi.fn();
//       invalidateQueries = vi.fn();
//     },
//   }));
// }

// // ============================================================================
// // COMPREHENSIVE SETUP FUNCTION
// // ============================================================================

// export function setupAllMocks() {
//   setupEnvironmentMocks();
//   setupNextMocks();
//   const { mockFetch, restore } = setupFetchMocks();
//   const services = setupServiceMocks();
//   const prisma = setupPrismaMocks();
//   const auth = setupAuthMocks();
//   const forms = setupFormMocks();

//   return {
//     mockFetch,
//     services,
//     prisma,
//     auth,
//     forms,
//     restore,
//   };
// }

// // ============================================================================
// // BROWSER API MOCKS
// // ============================================================================

// export function setupBrowserAPIMocks() {
//   // Mock localStorage
//   const localStorageMock = {
//     getItem: vi.fn(),
//     setItem: vi.fn(),
//     removeItem: vi.fn(),
//     clear: vi.fn(),
//   };
//   Object.defineProperty(window, "localStorage", { value: localStorageMock });

//   // Mock sessionStorage
//   const sessionStorageMock = {
//     getItem: vi.fn(),
//     setItem: vi.fn(),
//     removeItem: vi.fn(),
//     clear: vi.fn(),
//   };
//   Object.defineProperty(window, "sessionStorage", {
//     value: sessionStorageMock,
//   });

//   // Mock IntersectionObserver
//   global.IntersectionObserver = class IntersectionObserver {
//     constructor() {}
//     disconnect() {}
//     observe() {}
//     takeRecords() {
//       return [];
//     }
//     unobserve() {}
//   } as any;

//   // Mock ResizeObserver
//   global.ResizeObserver = class ResizeObserver {
//     constructor() {}
//     disconnect() {}
//     observe() {}
//     unobserve() {}
//   } as any;

//   return {
//     localStorage: localStorageMock,
//     sessionStorage: sessionStorageMock,
//   };
// }

// // ============================================================================
// // USAGE EXAMPLE IN TEST FILES
// // ============================================================================

// /**
//  * Example test file using this mock setup:
//  *
//  * import { setupAllMocks } from '@/lib/test/mocks';
//  *
//  * describe('MyComponent', () => {
//  *   const { restore } = setupAllMocks();
//  *
//  *   afterAll(() => restore());
//  *
//  *   test('renders correctly', () => {
//  *     // Your test here
//  *   });
//  * });
//  */

// export default {
//   setupEnvironmentMocks,
//   setupFetchMocks,
//   setupNextMocks,
//   setupServiceMocks,
//   setupPrismaMocks,
//   setupAuthMocks,
//   setupFormMocks,
//   setupQueryMocks,
//   setupBrowserAPIMocks,
//   setupAllMocks,
// };
