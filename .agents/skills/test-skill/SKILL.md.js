// ---
// name: test-skill
// description: 'Complete testing workflow for Next.js Better Auth. Covers unit tests, integration tests, E2E tests, and test coverage analysis. Use when testing authentication flows, validating feature implementations, debugging test failures, or setting up comprehensive test suites. Includes scripts for running tests in watch mode, CI/CD integration, and coverage reporting.'
// argument-hint: 'test type (unit|integration|e2e|coverage|all) and optional scope (auth|payments|sdk)'
// user-invocable: true
// disable-model-invocation: false
// ---

// # Complete Testing Workflow

// ## Overview

// This skill provides a comprehensive testing strategy for the Next.js Better Auth template. It covers multiple testing layers:

// - **Unit Tests**: Test individual functions, components, and utilities in isolation
// - **Integration Tests**: Test feature interactions and module dependencies
// - **E2E Tests**: Test complete user workflows (authentication, payments, settings)
// - **Coverage Analysis**: Identify gaps and ensure code quality standards

// ## When to Use

// ✓ Setting up test infrastructure
// ✓ Writing tests for new features
// ✓ Debugging failing tests
// ✓ Improving code coverage
// ✓ Validating authentication flows
// ✓ Testing payment integrations
// ✓ Pre-deployment verification
// ✓ Continuous integration/deployment

// ## Test Layers and Scope

// ### Layer 1: Unit Tests
// Focus on isolated units of code (functions, hooks, utilities).

// **Location**: `src/features/<feature>/__tests__/`
// **Files**: `*.test.ts`, `*.test.tsx`
// **Framework**: Vitest with React Testing Library
// **Coverage target**: 80%+

// ### Layer 2: Integration Tests
// Test feature modules and their interactions with other modules.

// **Location**: `src/features/<feature>/__tests__/integration/`
// **Files**: `*.integration.test.ts`
// **Setup**: Mock external services, use real database (test instance)
// **Focus**: Component interactions, hooks with state, server functions

// ### Layer 3: E2E Tests
// Test complete user workflows through the UI.

// **Location**: `__e2e__/`
// **Files**: `*.e2e.test.ts`
// **Framework**: Playwright
// **Setup**: Real application instance, test user accounts
// **Focus**: Auth flows, payment flows, full user journeys

// ### Layer 4: Coverage Analysis
// Track code coverage and identify untested code paths.

// **Reports**: `coverage/`
// **Tools**: Vitest coverage, HTML reports
// **CI Integration**: Coverage thresholds enforcement

// ## Procedures

// ### Procedure 1: Run Unit Tests

// ```bash
// # Run all unit tests
// bun test

// # Run tests in watch mode (development)
// bun test --watch

// # Run tests for specific feature
// bun test src/features/auth

// # Run specific test file
// bun test src/features/auth/__tests__/auth.test.ts

// # Run with coverage report
// bun test --coverage

// # Run with UI (Vitest UI dashboard)
// bun test --ui
// ```

// **Expected output**: Test results with pass/fail status, execution time, and coverage summary.

// ### Procedure 2: Run Integration Tests

// ```bash
// # Run all integration tests
// bun test integration

// # Run auth feature integration tests
// bun test src/features/auth/__tests__/integration

// # Run with specific reporter
// bun test integration --reporter=verbose
// ```

// **Setup required**:
// - Test database instance running
// - Environment variables configured (`.env.test`)
// - [Database Seeding Script](./scripts/seed-test-db.ts)

// ### Procedure 3: Run E2E Tests

// ```bash
// # Run all E2E tests
// bun run e2e

// # Run specific test
// bun run e2e:auth

// # Run in headed mode (see browser)
// bun run e2e:headed

// # Run with debug mode
// bun run e2e:debug

// # Generate HTML report
// bun run e2e:report
// ```

// **Prerequisites**:
// - Application running locally (http://localhost:3000)
// - Test accounts created (see [E2E Setup Guide](./references/e2e-setup.md))
// - Playwright browsers installed

// ### Procedure 4: Coverage Analysis and Reporting

// ```bash
// # Generate coverage report
// bun test --coverage

// # View HTML coverage report
// bun run coverage:report

// # Check coverage thresholds
// bun run coverage:check

// # Generate LCOV report for CI
// bun test --coverage --reporter=lcov
// ```

// **Thresholds**:
// - Statements: 80%
// - Branches: 75%
// - Functions: 80%
// - Lines: 80%

// **Review coverage**: Open `coverage/index.html` in browser to identify untested code paths.

// ### Procedure 5: CI/CD Integration

// Run this before commits and deployments:

// ```bash
// # Full test suite (unit + integration)
// bun run test:ci

// # Generate artifacts for CI pipeline
// bun run test:artifacts

// # Coverage validation
// bun run coverage:ci
// ```

// **CI Variables**: Configure in GitHub Actions or deployment platform:
// - `TEST_DATABASE_URL`: Separate test database
// - `TEST_AUTH_SECRET`: Test application secret
// - `E2E_HEADLESS`: Set to true for CI

// ## Quick Reference

// | Task | Command | Time |
// |------|---------|------|
// | Unit tests (all) | `bun test` | ~30s |
// | Unit tests (watch) | `bun test --watch` | Ongoing |
// | Integration tests | `bun test integration` | ~60s |
// | E2E tests | `bun run e2e` | ~2-5m |
// | Coverage report | `bun test --coverage` | ~45s |
// | Full test suite | `bun run test:ci` | ~5-10m |

// ## File Structure

// Create tests following this structure:

// ```
// src/features/auth/
// ├── __tests__/
// │   ├── auth.test.ts              // Unit tests
// │   ├── hooks.test.tsx            // Hook tests
// │   ├── integration/
// │   │   └── auth-flow.test.ts     // Integration tests
// │   └── fixtures/
// │       └── mock-data.ts          // Shared test data
// ├── components/
// ├── hooks/
// ├── server/
// └── ...
// ```

// ## Testing Checklists

// ### Authentication Testing Checklist
// - [ ] Email/password signup flow
// - [ ] Email verification process
// - [ ] Password reset flow
// - [ ] Login/logout functionality
// - [ ] Session management
// - [ ] Token refresh
// - [ ] OAuth provider flows (Google, GitHub)
// - [ ] 2FA setup and verification
// - [ ] Organization/team creation
// - [ ] Member invitations

// ### Component Testing Checklist
// - [ ] Render without errors
// - [ ] Prop validation and edge cases
// - [ ] User interactions (click, input, submit)
// - [ ] Accessibility attributes (role, aria-labels)
// - [ ] Error states and messages
// - [ ] Loading states
// - [ ] Form submission and validation

// ### Integration Testing Checklist
// - [ ] Feature-to-feature interactions
// - [ ] Module dependencies resolved correctly
// - [ ] Database operations work end-to-end
// - [ ] Cache invalidation works
// - [ ] Side effects triggered properly
// - [ ] Error handling and recovery

// ### E2E Testing Checklist
// - [ ] Complete user journeys work
// - [ ] Navigation between pages works
// - [ ] Authentication persists across page reloads
// - [ ] Error messages display correctly
// - [ ] Payment flows complete successfully
// - [ ] Settings updates persist
// - [ ] Mobile/responsive design works (if applicable)

// ## Common Testing Patterns

// ### Pattern 1: Testing Authentication
// See [Authentication Testing Guide](./references/auth-testing.md)

// ### Pattern 2: Testing React Components
// See [Component Testing Guide](./references/component-testing.md)

// ### Pattern 3: Testing Server Functions
// See [Server Function Testing Guide](./references/server-testing.md)

// ### Pattern 4: Testing Data Flows
// See [Data Flow Testing Guide](./references/data-flow-testing.md)

// ### Pattern 5: Testing Error Scenarios
// See [Error Scenario Testing Guide](./references/error-testing.md)

// ## Helper Scripts

// - [Database Seeding Script](./scripts/seed-test-db.ts) - Populate test database with fixtures
// - [Mock Data Generator](./scripts/generate-mocks.ts) - Create realistic test data
// - [Test Report Analyzer](./scripts/analyze-reports.ts) - Parse and analyze test results
// - [Coverage Validator](./scripts/validate-coverage.ts) - Check coverage thresholds

// ## Templates and Boilerplate

// - [Unit Test Template](./assets/unit-test.template.ts)
// - [Integration Test Template](./assets/integration-test.template.ts)
// - [E2E Test Template](./assets/e2e-test.template.ts)
// - [Mock Setup Template](./assets/mock-setup.template.ts)
// - [Test Fixtures Template](./assets/fixtures.template.ts)

// ## Troubleshooting

// ### Tests are slow
// - Reduce database operations in unit tests (use mocks)
// - Run tests in parallel: `bun test --reporter=default`
// - Check for slow operations in setup/teardown

// ### Tests timeout
// - Increase timeout: `vi.setConfig({ testTimeout: 10000 })`
// - Check for hanging network requests
// - Ensure test database is responsive

// ### Flaky E2E tests
// - Add explicit waits for elements
// - Use `waitFor` instead of `sleep`
// - Check for race conditions in test logic
// - Increase timeout for slow CI environments

// ### Coverage not improving
// - Identify untested branches in coverage report
// - Write tests for error cases
// - Test edge cases and boundary conditions
// - Update coverage thresholds incrementally

// ## Next Steps

// 1. **Review**: Read [Test Strategy Overview](./references/test-strategy.md)
// 2. **Learn**: Study one of the [Testing Guides](./references/component-testing.md)
// 3. **Implement**: Use the templates to write your first test
// 4. **Validate**: Run the tests locally before committing
// 5. **Improve**: Monitor coverage and incrementally improve

// ## Related Documentation

// - [Test Configuration](./references/test-config.md)
// - [CI/CD Test Integration](./references/ci-integration.md)
// - [Performance Testing Guide](./references/performance-testing.md)
// - [Debugging Tests Guide](./references/debugging-tests.md)

// ---

// **Note**: This skill works with the project configuration in `vitest.config.ts`, test setup files, and environment configuration. Ensure all dependencies are installed before running tests.
