# Component Testing Guide

## Overview

Component testing validates that React components render correctly, handle user interactions, and display appropriate states.

## Testing Strategies

### Rendering Tests

Verify components render without errors and display expected content.

```typescript
describe('LoginForm Component', () => {
  test('renders login form with email and password inputs', () => {
    const { getByLabelText, getByRole } = render(<LoginForm />);

    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
    expect(getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  test('renders with correct ARIA attributes for accessibility', () => {
    const { getByRole } = render(<LoginForm />);

    const form = getByRole('form');
    expect(form).toHaveAttribute('aria-label', 'Login form');
  });
});
```

### User Interaction Tests

Simulate user interactions and verify component responses.

```typescript
describe('LoginForm - User Interactions', () => {
  test('updates form values when user types', async () => {
    const { getByLabelText } = render(<LoginForm />);
    const emailInput = getByLabelText(/email/i);

    await userEvent.type(emailInput, 'test@example.com');
    expect(emailInput).toHaveValue('test@example.com');
  });

  test('calls onSubmit with form data when submitted', async () => {
    const onSubmit = vi.fn();
    const { getByLabelText, getByRole } = render(
      <LoginForm onSubmit={onSubmit} />
    );

    await userEvent.type(getByLabelText(/email/i), 'test@example.com');
    await userEvent.type(getByLabelText(/password/i), 'password123');
    await userEvent.click(getByRole('button', { name: /sign in/i }));

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });
});
```

### Props and State Tests

Validate behavior with different props and state scenarios.

```typescript
describe('Button Component - Props Variants', () => {
  test('renders with loading spinner when isLoading is true', () => {
    const { getByRole, getByTestId } = render(
      <Button isLoading>Submit</Button>
    );

    expect(getByTestId('spinner')).toBeInTheDocument();
    expect(getByRole('button')).toBeDisabled();
  });

  test('applies correct styling for variant prop', () => {
    const { getByRole } = render(
      <Button variant="destructive">Delete</Button>
    );

    expect(getByRole('button')).toHaveClass('bg-red-600');
  });

  test('disables button when disabled prop is true', () => {
    const { getByRole } = render(
      <Button disabled>Submit</Button>
    );

    expect(getByRole('button')).toBeDisabled();
  });
});
```

### Error State Tests

Test error handling and error messages.

```typescript
describe('LoginForm - Error States', () => {
  test('displays validation error for invalid email', async () => {
    const { getByLabelText, getByRole, getByText } = render(
      <LoginForm />
    );

    const emailInput = getByLabelText(/email/i);
    await userEvent.type(emailInput, 'invalid-email');
    await userEvent.click(getByRole('button', { name: /sign in/i }));

    expect(getByText(/invalid email/i)).toBeInTheDocument();
  });

  test('displays server error message when login fails', async () => {
    const { getByText } = render(
      <LoginForm error="Invalid credentials" />
    );

    expect(getByText('Invalid credentials')).toBeInTheDocument();
    expect(getByText('Invalid credentials')).toHaveClass('text-red-600');
  });
});
```

### Hooks Testing

Test hooks that manage component logic.

```typescript
describe("useAuth Hook", () => {
  test("returns user after successful login", async () => {
    const { result } = renderHook(() => useAuth());

    // Initial state
    expect(result.current.user).toBeNull();
    expect(result.current.isLoading).toBe(false);

    // Perform login
    act(() => {
      result.current.login("test@example.com", "password");
    });

    // Wait for state update
    await waitFor(() => {
      expect(result.current.user).toBeDefined();
      expect(result.current.user.email).toBe("test@example.com");
    });
  });

  test("clears user on logout", async () => {
    const { result } = renderHook(() => useAuth());

    // Setup: Login first
    act(() => {
      result.current.login("test@example.com", "password");
    });

    await waitFor(() => expect(result.current.user).toBeDefined());

    // Action: Logout
    act(() => {
      result.current.logout();
    });

    // Assert
    expect(result.current.user).toBeNull();
  });
});
```

## Test Structure Template

```typescript
describe("ComponentName", () => {
  // Setup
  beforeEach(() => {
    // Reset mocks, clear state, etc.
  });

  // Group related tests
  describe("rendering", () => {
    test("renders without errors", () => {});
    test("displays required content", () => {});
  });

  describe("user interactions", () => {
    test("handles click events", () => {});
    test("updates state on input change", () => {});
  });

  describe("error states", () => {
    test("displays error message", () => {});
    test("disables submit when invalid", () => {});
  });

  // Cleanup
  afterEach(() => {
    // Clean up resources
  });
});
```

## Accessibility Testing

```typescript
test('form is keyboard navigable', async () => {
  const { getByLabelText } = render(<LoginForm />);
  const emailInput = getByLabelText(/email/i);

  emailInput.focus();
  expect(document.activeElement).toBe(emailInput);

  await userEvent.tab();
  expect(document.activeElement).toHaveAttribute('type', 'password');
});

test('form has proper semantic HTML', () => {
  const { getByRole } = render(<LoginForm />);

  expect(getByRole('form')).toBeInTheDocument();
  expect(getByRole('textbox', { name: /email/i })).toBeInTheDocument();
});
```

## Snapshot Testing

```typescript
test('renders correct structure', () => {
  const { container } = render(<Card title="Test">Content</Card>);
  expect(container.firstChild).toMatchSnapshot();
});
```

## Performance Testing

```typescript
test('renders efficiently without unnecessary re-renders', () => {
  const renderSpy = vi.fn();
  const { rerender } = render(<Button onClick={renderSpy}>Click</Button>);

  expect(renderSpy).toHaveBeenCalledTimes(1);

  rerender(<Button onClick={renderSpy}>Click</Button>);

  // Should not re-render if props haven't changed
  expect(renderSpy).toHaveBeenCalledTimes(1);
});
```

## Common Utilities

```typescript
// Custom render with providers
export const renderWithProviders = (component) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {component}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

// Wait for async operations
await waitFor(() => {
  expect(element).toBeInTheDocument();
});

// User interactions
await userEvent.type(input, 'text');
await userEvent.click(button);
await userEvent.selectOption(select, 'value');
```

## Coverage Checklist

- [ ] All render paths covered
- [ ] All user interactions tested
- [ ] All props variants tested
- [ ] All error states tested
- [ ] Accessibility attributes validated
- [ ] Loading states tested
- [ ] Edge cases covered
- [ ] Keyboard navigation tested
