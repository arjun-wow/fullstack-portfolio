import React from 'react'
import TodoItem from './TodoItem'

const TodoList = React.memo(function TodoList({ todos, toggle, remove }) {
  if (todos.length === 0) return <div className="dashboard"><p>No todos match.</p></div>
  return (
    <ul className="todo-list">
      {todos.map(t => (
        <TodoItem key={t.id} todo={t} toggle={toggle} remove={remove} />
      ))}
    </ul>
  )
})

export default TodoList
