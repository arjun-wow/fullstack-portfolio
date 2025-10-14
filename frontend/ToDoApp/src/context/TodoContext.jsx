import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
const STORAGE = 'enterprise:todos_v1'
const TodoContext = createContext()

export function TodoProvider({ children }){
  const [todos, setTodos] = useState(() => {
    try { const raw = localStorage.getItem(STORAGE); return raw ? JSON.parse(raw) : [] } catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(todos))
  }, [todos])

  const addTodo = useCallback((text, category='General') => {
    setTodos(prev => [...prev, { id: Date.now(), text, category, done:false }])
  }, [])

  const toggle = useCallback((id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }, [])

  const remove = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }, [])

  const value = { todos, addTodo, toggle, remove }
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export function useTodos(){ return useContext(TodoContext) }
