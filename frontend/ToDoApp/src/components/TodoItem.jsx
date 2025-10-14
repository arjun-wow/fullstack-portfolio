import React from 'react'

export default function TodoItem({ todo, onToggle, onDelete }){
  return (
    <li className={'flex items-center justify-between p-3 bg-white rounded shadow-sm'}>
      <div className="flex items-center space-x-3">
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        <div>
          <div className={'font-medium ' + (todo.done ? 'line-through text-gray-400' : '')}>{todo.text}</div>
          <div className="text-xs text-gray-500">{todo.category}</div>
        </div>
      </div>
      <div className="space-x-2">
        <button onClick={() => onDelete(todo.id)} className="text-sm text-red-500">Delete</button>
      </div>
    </li>
  )
}
