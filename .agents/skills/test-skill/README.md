# Test Skill - Complete Testing Workflow

Welcome to the **Test Skill**! This comprehensive skill provides everything you need to implement a testing strategy for the Next.js Better Auth template, from unit tests to end-to-end tests with full documentation and templates.

## 📁 Skill Structure

```
test-skill/
├── SKILL.md                          # Main skill file with procedures
├── references/                        # In-depth documentation
│   ├── auth-testing.md              # Authentication testing guide
│   ├── component-testing.md          # React component testing
│   ├── server-testing.md             # Server & tRPC testing
│   ├── e2e-setup.md                  # E2E test setup with Playwright
│   ├── test-config.md                # Configuration guide
│   └── README.md                     # This file
├── assets/                            # Test templates and boilerplate
│   ├── unit-test.template.ts         # Unit test template
│   ├── component-test.template.tsx   # Component test template
│   ├── integration-test.template.ts  # Integration test template
│   └── e2e-test.template.spec.ts     # E2E test template
└── scripts/                           # Helper scripts
    ├── seed-test-db.ts               # Database seeding
    ├── generate-mocks.ts             # Mock data generation
    └── analyze-reports.ts            # Test report analysis
```

## 🚀 Quick Start

### Step 1: Read the Main Skill File

Start with [SKILL.md](./SKILL.md) to understand:

- When to use different testing layers
- Core procedures for running tests
- Testing checklists and patterns

### Step 2: Choose Your Testing Layer

| Layer                 | Best For                           | Start With                     |
| --------------------- | ---------------------------------- | ------------------------------ |
| **Unit Tests**        | Functions, utilities, simple logic | `unit-test.template.ts`        |
| **Component Tests**   | React components, hooks            | `component-test.template.tsx`  |
| **Integration Tests** | Feature workflows, database        | `integration-test.template.ts` |
| **E2E Tests**         | Complete user journeys             | `e2e-test.template.spec.ts`    |

### Step 3: Read the Relevant Reference Guide

- **Testing authentication?** → Read [auth-testing.md](./references/auth-testing.md)
- **Testing components?** → Read [component-testing.md](./references/component-testing.md)
- **Testing server code?** → Read [server-testing.md](./references/server-testing.md)
- **Setting up E2E?** → Read [e2e-setup.md](./references/e2e-setup.md)
- **Configuring tests?** → Read [test-config.md](./references/test-config.md)

### Step 4: Use the Templates

Copy a template and follow the structure:

```bash
# Copy unit test template
cp assets/unit-test.template.ts src/features/auth/__tests__/auth.test.ts

# Uncomment code and customize for your needs
```

### Step 5: Run the Helper Scripts

```bash
# Seed test database
bun scripts/seed-test-db.ts

# Generate mock data
bun scripts/generate-mocks.ts

# Analyze test reports
bun scripts/analyze-reports.ts
```

## 📚 documentation Overview

### Main Procedures

Each reference document provides detailed walkthroughs:

#### [auth-testing.md](./references/auth-testing.md)

- Email/password signup & login
- Password reset flows
- OAuth provider integration
- 2FA setup and verification
- Session management testing
- Test data fixtures
- Common assertions

#### [component-testing.md](./references/component-testing.md)

- Rendering tests
- User interaction tests
- State and props validation
- Error state testing
- Accessibility testing
- Hooks testing
- Performance testing

#### [server-testing.md](./references/server-testing.md)

- Unit testing tRPC procedures
- Database integration testing
- HTTP API route testing
- Business logic testing
- Error handling
- Mocking external services

#### [e2e-setup.md](./references/e2e-setup.md)

- Playwright configuration
- Authentication setup
- Form validation testing
- Navigation testing
- API interception
- Debugging techniques
- CI/CD integration

#### [test-config.md](./references/test-config.md)

- Vitest configuration
- Test environment setup
- Package.json scripts
- GitHub Actions workflow
- Docker Compose setup
- Coverage thresholds
- Debugging tips

## 🛠️ Helper Scripts

### seed-test-db.ts

Populates test database with fixtures

```bash
bun scripts/seed-test-db.ts
```

Creates:

- Test users (verified, unverified, premium)
- Test sessions
- Sample data

### generate-mocks.ts

Generates realistic mock data for tests

```bash
bun scripts/generate-mocks.ts
```

Provides:

- `generateMockUser()` - Create single user
- `generateMockSession()` - Create session
- `mockScenarios` - Common test scenarios

### analyze-reports.ts

Parses and summarizes test results

```bash
bun scripts/analyze-reports.ts
```

Shows:

- Test pass/fail/skip counts
- Execution time
- Code coverage summary
- Coverage threshold status

## 📋 Testing Checklists

### Before Committing Code

- [ ] Run unit tests: `bun test`
- [ ] Check coverage: `bun test --coverage`
- [ ] All tests pass locally

### Before Creating PR

- [ ] Fix failing tests
- [ ] Coverage above 80%
- [ ] No console errors/warnings
- [ ] E2E tests pass (if applicable)

### Before Deployment

- [ ] Full test suite passes: `bun run test:ci`
- [ ] E2E tests pass: `bun run e2e`
- [ ] Coverage reports reviewed
- [ ] No known flaky tests

## 🎯 Coverage Goals

| Area                | Target |
| ------------------- | ------ |
| Overall Statements  | 80%    |
| Overall Branches    | 75%    |
| Overall Functions   | 80%    |
| Overall Lines       | 80%    |
| Auth endpoints      | 90%    |
| Core business logic | 90%    |
| Error paths         | 80%    |

## 🔍 Common Workflows

### Writing a Unit Test

1. Copy `unit-test.template.ts`
2. Import function to test
3. Follow Arrange-Act-Assert pattern
4. Use `vi.fn()` for mocks
5. Run: `bun test --watch`

### Writing a Component Test

1. Copy `component-test.template.tsx`
2. Import component
3. Use React Testing Library queries
4. Test user interactions with `userEvent`
5. Run: `bun test --ui` for visual feedback

### Writing Integration Tests

1. Copy `integration-test.template.ts`
2. Set up database (beforeAll/afterAll)
3. Test full workflows
4. Clean up data between tests
5. Run: `bun test integration`

### Writing E2E Tests

1. Copy `e2e-test.template.spec.ts`
2. Use Playwright selectors
3. Navigate and interact with UI
4. Verify business logic
5. Run: `bun run e2e --headed` for browser view

## 📖 Learning Path

**Beginner:**

1. Start with [test-config.md](./references/test-config.md) - understand setup
2. Look at `unit-test.template.ts` - simple syntax
3. Write a few unit tests for utilities

**Intermediate:**

1. Read [component-testing.md](./references/component-testing.md)
2. Study `component-test.template.tsx`
3. Write component tests with user interactions

**Advanced:**

1. Study [auth-testing.md](./references/auth-testing.md) for complex flows
2. Look at [server-testing.md](./references/server-testing.md) for integration
3. Study [e2e-setup.md](./references/e2e-setup.md) for full workflows
4. Practice mocking and async testing patterns

## 🤔 Troubleshooting

### Tests timing out

→ See [test-config.md](./references/test-config.md#debugging-tests)

### Database tests failing

→ Use `seed-test-db.ts` to set up fixtures

### Mock data issues

→ Use `generate-mocks.ts` for realistic test data

### E2E tests flaky

→ See [e2e-setup.md](./references/e2e-setup.md#debugging)

### Coverage not improving

→ Check coverage report in `coverage/index.html`

## 📞 Need Help?

Each reference document has:

- Working code examples
- Best practices
- Common patterns
- Troubleshooting tips
- Performance optimization

## ✅ Features of This Skill

✓ **4 testing layers** - Unit, Component, Integration, E2E
✓ **5 reference guides** - In-depth documentation for each area
✓ **4 test templates** - Ready-to-use boilerplate code
✓ **3 helper scripts** - Database, mocks, and reporting
✓ **Complete examples** - Real-world testing patterns
✓ **Best practices** - Industry standards for all testing types
✓ **Checklists** - Quality gates and verification steps
✓ **Troubleshooting** - Solutions for common issues

## 🎓 Next Steps

1. **Start:** Open [SKILL.md](./SKILL.md) and follow Procedure 1
2. **Learn:** Read one of the reference guides
3. **Practice:** Copy a template and write your first test
4. **Improve:** Use the scripts and checklists to validate quality

Good luck testing! 🧪

---

**Pro Tip**: Bookmark this README and the main [SKILL.md](./SKILL.md) for quick reference while writing tests.
