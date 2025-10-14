import { render, screen } from '@testing-library/react'
import TodoList from '../components/TodoList'

test('shows empty state', () => {
  render(<TodoList todos={[]} onToggle={()=>{}} onDelete={()=>{}} />)
  expect(screen.getByText(/No todos found/i)).toBeInTheDocument()
})
