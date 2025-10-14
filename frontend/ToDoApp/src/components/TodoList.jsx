import React from 'react'
import TodoItem from './TodoItem'

const TodoList = React.memo(function TodoList({ todos, onToggle, onDelete }){
  if(!todos.length) return <div className="p-4 bg-white rounded">No todos found.</div>
  return (
    <ul className="space-y-2">
      {todos.map(t => <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />)}
    </ul>
  )
})

export default TodoList
