import { render, screen, fireEvent } from '@testing-library/react'
import TodoItem from '../components/TodoItem'

const todo = { id:1, text:'Test todo', category:'Work', done:false }

test('renders todo item', () => {
  const onToggle = jest.fn(); const onDelete = jest.fn()
  render(<TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} />)
  expect(screen.getByText('Test todo')).toBeInTheDocument()
  expect(screen.getByText('Work')).toBeInTheDocument()
})
