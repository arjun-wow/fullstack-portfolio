import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../src/TodoList';

describe('TodoList Component', () => {
  test('adds a todo item', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-btn');

    fireEvent.change(input, { target: { value: 'Learn Testing' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-btn');

    fireEvent.change(input, { target: { value: 'Write Tests' } });
    fireEvent.click(addButton);
    expect(screen.getByText('Write Tests')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Delete'));
    expect(screen.queryByText('Write Tests')).not.toBeInTheDocument();
  });
});
