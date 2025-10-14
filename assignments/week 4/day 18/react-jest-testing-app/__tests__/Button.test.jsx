import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../src/Button';

describe('Button Component', () => {
  test('renders with label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByTestId('btn'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when prop is true', () => {
    render(<Button label="Disabled" disabled />);
    expect(screen.getByTestId('btn')).toBeDisabled();
  });
});
