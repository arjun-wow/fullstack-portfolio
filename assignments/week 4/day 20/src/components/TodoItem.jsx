import React from 'react'

export default function TodoItem({ todo, toggle, remove }) {
  return (
    <li className={ 'todo-item' + (todo.done ? ' done' : '') }>
      <div style={{display:'flex',alignItems:'center'}}>
        <input type="checkbox" checked={todo.done} onChange={() => toggle(todo.id)} />
        <span className="text" style={{marginLeft:8}}>{todo.text}</span>
        <span className="category">{todo.category}</span>
      </div>
      <div>
        <button onClick={() => remove(todo.id)} style={{marginRight:8}}>Delete</button>
      </div>
    </li>
  )
}
