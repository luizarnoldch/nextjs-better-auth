# Test Configuration Guide

## Vitest Configuration

### `vitest.config.ts`

```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/lib/test/setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      exclude: [
        "node_modules/",
        "src/lib/test/",
        "**/*.test.ts",
        "**/*.test.tsx",
      ],
      lines: 80,
      functions: 80,
      branches: 75,
      statements: 80,
    },
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules", "dist"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Test Setup File (`src/lib/test/setup.ts`)

```typescript
import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock Next.js router
vi.mock("next/router", () => ({
  useRouter: () => ({
    push: vi.fn(),
    pathname: "/",
    query: {},
  }),
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
}));

// Setup global test utilities
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));
```

## Test Environment Variables

### `.env.test`

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/test_db"

# Auth
AUTH_SECRET="test-secret-key-minimum-32-characters-long"
AUTH_URL="http://localhost:3000"

# Services
RESEND_API_KEY="test_key"
MINIO_ENDPOINT="http://localhost:9000"
MINIO_ACCESS_KEY="minioadmin"
MINIO_SECRET_KEY="minioadmin"

# Testing
NODE_ENV="test"
TEST_MODE="true"
```

## Package.json Test Scripts

```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:ui": "vitest --ui",
    "test:run": "vitest run",
    "test:integration": "vitest run --grep integration",
    "test:coverage": "vitest run --coverage",
    "test:ci": "vitest run --coverage --reporter=verbose",
    "e2e": "playwright test",
    "e2e:headed": "playwright test --headed",
    "e2e:debug": "playwright test --debug",
    "e2e:report": "playwright show-report",
    "coverage:report": "open coverage/index.html"
  }
}
```

## CI/CD Configuration

### GitHub Actions (`.github/workflows/test.yml`)

```yaml
name: Tests
on: [push, pull_request]

jobs:
  unit:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: test_db
          POSTGRES_USER: user
          POSTGRES_PASSWORD: password
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - run: bun install
      - run: bun run test:ci
      - uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info

  e2e:
    runs-on: ubuntu-latest
    needs: unit
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: test_db
          POSTGRES_USER: user
          POSTGRES_PASSWORD: password
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432

    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
      - uses: microsoft/playwright-github-action@v1
      - run: bun install
      - run: bun run e2e
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## Docker Compose for Tests

```yaml
version: "3.8"
services:
  postgres-test:
    image: postgres:16
    environment:
      POSTGRES_DB: test_db
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d test_db"]
      interval: 10s
      timeout: 5s
      retries: 5

  minio-test:
    image: minio/minio:latest
    environment:
      MINIO_ROOT_USER: minioadmin
      MINIO_ROOT_PASSWORD: minioadmin
    ports:
      - "9000:9000"
      - "9001:9001"
    command: server /data --console-address ":9001"

  redis-test:
    image: redis:7-alpine
    ports:
      - "6379:6379"
```

## Test Report Configuration

### Coverage Thresholds

```typescript
// vitest.config.ts
coverage: {
  all: true,
  lines: 80,
  functions: 80,
  branches: 75,
  statements: 80,
  exclude: [
    'src/**/*.stories.ts',
    'src/**/*.mock.ts',
  ],
}
```

### HTML Reports

Generated automatically in:

- `coverage/` - Vitest coverage HTML report
- `playwright-report/` - Playwright E2E test reports
- `test-results/` - XML results for CI systems

## Debugging Tips

1. **Print debug info**: `console.log()` outputs visible during test runs
2. **Pause on failure**: Use `vi.setConfig({ testTimeout: 0 })` and add debugger statements
3. **Watch mode development**: `bun test --watch` for rapid iteration
4. **Vitest UI**: `bun test --ui` for interactive test explorer
5. **Playwright Inspector**: `PWDEBUG=1 bun run e2e` for step-by-step debugging

## Best Practices

- Keep test database separate from production
- Run tests in isolation (no shared state)
- Mock external services
- Use test fixtures for common setup
- Parallel execution where possible
- Clear database between tests
- Use meaningful test descriptions
- Maintain >80% coverage
- Review flaky tests regularly
