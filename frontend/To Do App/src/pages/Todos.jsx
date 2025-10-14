import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'vite-todo-router:todos'

export default function Todos() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [text, setText] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(e) {
    e.preventDefault()
    const t = text.trim()
    if (!t) return
    const newTodo = { id: Date.now(), text: t, done: false }
    setTodos(prev => [newTodo, ...prev])
    setText('')
  }

  function toggle(id) {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function remove(id) {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div>
      <h2>Todos</h2>
      <form onSubmit={addTodo} className="todo-form">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>

      {todos.length === 0 ? (
        <p>No todos yet — add one!</p>
      ) : (
        <ul className="todo-list">
          {todos.map(t => (
            <li key={t.id} className={t.done ? 'done' : ''}>
              <label>
                <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
                <span className="todo-text">{t.text}</span>
              </label>
              <button className="delete" onClick={() => remove(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
