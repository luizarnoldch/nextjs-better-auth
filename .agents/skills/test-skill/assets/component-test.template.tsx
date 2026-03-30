// import { describe, test, expect, beforeEach } from 'vitest';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// /**
//  * React Component Test Template
//  *
//  * This template demonstrates the structure and best practices for testing
//  * React components using React Testing Library.
//  */

// // import { ComponentToTest } from '@/path/to/component';

// describe('ComponentToTest', () => {
//   beforeEach(() => {
//     // Reset any global state or mocks
//   });

//   describe('rendering', () => {
//     test('renders without errors', () => {
//       // render(<ComponentToTest />);
//       // expect(screen.queryByText('error')).not.toBeInTheDocument();
//     });

//     test('displays required content', () => {
//       // render(<ComponentToTest title="Test Title" />);
//       // expect(screen.getByText('Test Title')).toBeInTheDocument();
//     });

//     test('applies correct CSS classes for styling', () => {
//       // render(<ComponentToTest variant="primary" />);
//       // const element = screen.getByRole('button');
//       // expect(element).toHaveClass('bg-blue-600');
//     });

//     test('renders with all required props', () => {
//       // render(
//       //   <ComponentToTest
//       //     prop1="value1"
//       //     prop2="value2"
//       //     onEvent={vi.fn()}
//       //   />
//       // );
//       // // Verify component rendered
//     });
//   });

//   describe('user interactions', () => {
//     test('handles click events', async () => {
//       // const user = userEvent.setup();
//       // const handleClick = vi.fn();
//       // render(<ComponentToTest onClick={handleClick} />);
//       //
//       // const button = screen.getByRole('button');
//       // await user.click(button);
//       //
//       // expect(handleClick).toHaveBeenCalled();
//     });

//     test('updates state on input change', async () => {
//       // const user = userEvent.setup();
//       // render(<ComponentToTest />);
//       //
//       // const input = screen.getByRole('textbox');
//       // await user.type(input, 'test input');
//       //
//       // expect(input).toHaveValue('test input');
//     });

//     test('submits form with collected data', async () => {
//       // const user = userEvent.setup();
//       // const onSubmit = vi.fn();
//       // render(<ComponentToTest onSubmit={onSubmit} />);
//       //
//       // await user.type(screen.getByLabelText(/email/i), 'test@example.com');
//       // await user.click(screen.getByRole('button', { name: /submit/i }));
//       //
//       // expect(onSubmit).toHaveBeenCalledWith({
//       //   email: 'test@example.com',
//       // });
//     });
//   });

//   describe('conditional rendering', () => {
//     test('shows content when condition is true', () => {
//       // render(<ComponentToTest isVisible={true} />);
//       // expect(screen.getByText('Content')).toBeInTheDocument();
//     });

//     test('hides content when condition is false', () => {
//       // render(<ComponentToTest isVisible={false} />);
//       // expect(screen.queryByText('Content')).not.toBeInTheDocument();
//     });

//     test('displays error state correctly', () => {
//       // render(<ComponentToTest error="Something went wrong" />);
//       // expect(screen.getByText('Something went wrong')).toBeInTheDocument();
//       // expect(screen.getByText('Something went wrong')).toHaveClass('text-red-600');
//     });

//     test('displays loading state correctly', () => {
//       // render(<ComponentToTest isLoading={true} />);
//       // expect(screen.getByTestId('spinner')).toBeInTheDocument();
//       // expect(screen.getByRole('button')).toBeDisabled();
//     });
//   });

//   describe('accessibility', () => {
//     test('has proper semantic HTML', () => {
//       // render(<ComponentToTest />);
//       // expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
//     });

//     test('has proper ARIA labels', () => {
//       // render(<ComponentToTest />);
//       // expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
//     });

//     test('is keyboard navigable', async () => {
//       // const user = userEvent.setup();
//       // render(<ComponentToTest />);
//       //
//       // const button = screen.getByRole('button');
//       // button.focus();
//       // expect(document.activeElement).toBe(button);
//       //
//       // await user.tab();
//       // expect(document.activeElement).not.toBe(button);
//     });

//     test('has sufficient color contrast', () => {
//       // This typically requires automated testing tools
//       // or manual accessibility audit
//     });
//   });

//   describe('props validation', () => {
//     test('accepts valid prop values', () => {
//       // render(<ComponentToTest variant="primary" />);
//       // const element = screen.getByRole('button');
//       // expect(element).toHaveClass('bg-blue-600');
//     });

//     test('handles default props', () => {
//       // render(<ComponentToTest />);
//       // const element = screen.getByRole('button');
//       // expect(element).toHaveClass('bg-gray-600'); // default variant
//     });

//     test('handles optional props', () => {
//       // render(<ComponentToTest icon={undefined} />);
//       // expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
//     });
//   });
// });

// /**
//  * React Testing Library Best Practices:
//  *
//  * 1. Query Preferences (in order):
//  *    - getByRole() - most accessible
//  *    - getByLabel() - for forms
//  *    - getByPlaceholder() - for inputs
//  *    - getByText() - for text content
//  *    - getByTestId() - last resort
//  *
//  * 2. User Interactions:
//  *    - Use userEvent instead of fireEvent
//  *    - Test user behavior, not implementation
//  *    - Always use async/await with user events
//  *
//  * 3. Assertions:
//  *    - toBeInTheDocument()
//  *    - toHaveValue()
//  *    - toHaveClass()
//  *    - toHaveAttribute()
//  *    - toHaveValue()
//  *    - toBeDisabled()
//  *    - toHaveTextContent()
//  *
//  * 4. Setup:
//  *    - Render component for each test
//  *    - Reset global state in beforeEach
//  *    - Clean up after each test (handled by RTL)
//  *
//  * Tips:
//  * - Test user behavior, not component implementation
//  * - Avoid testing implementation details
//  * - Use data-testid sparingly and with purpose
//  * - Test edge cases and error states
//  * - Mock child components if they're complex
//  * - Focus on accessibility (use semantic HTML)
//  */
