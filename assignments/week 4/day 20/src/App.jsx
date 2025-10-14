import React, { useEffect, useState, useMemo } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Loader from './components/Loader'
import TodoList from './components/TodoList'
import Dashboard from './components/Dashboard'
import FilterBar from './components/FilterBar'
import SearchBar from './components/SearchBar'
import CategorySelect from './components/CategorySelect'

const STORAGE_KEY = 'day20:todos'

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState('')
  const [category, setCategory] = useState('General')
  const [filter, setFilter] = useState({ status: 'All', category: 'All' })
  const [query, setQuery] = useState('')

  useEffect(() => {
    // simulate load
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    const txt = text.trim()
    if (!txt) return
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text: txt, category, done: false }
    ])
    setText('')
  }

  const toggle = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const remove = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  const categories = useMemo(() => {
    const set = new Set(todos.map(t => t.category))
    return ['General', ...Array.from(set)]
  }, [todos])

  const filtered = useMemo(() => {
    return todos.filter(t => {
      if (filter.status === 'Completed' && !t.done) return false
      if (filter.status === 'Pending' && t.done) return false
      if (filter.category !== 'All' && t.category !== filter.category) return false
      if (query && !t.text.toLowerCase().includes(query.toLowerCase())) return false
      return true
    })
  }, [todos, filter, query])

  return (
    <div className="app container">
      <h1>Day 20 - Enhanced Todo Dashboard</h1>

      <ErrorBoundary>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="controls">
              <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add todo..."
                className="input"
              />
              <CategorySelect value={category} onChange={setCategory} categories={categories} />
              <button onClick={addTodo} className="btn">Add</button>
            </div>

            <div className="top-row">
              <Dashboard todos={todos} />
              <div style={{flex:1, minWidth:240}}>
                <FilterBar filter={filter} setFilter={setFilter} categories={categories} />
                <SearchBar query={query} setQuery={setQuery} />
              </div>
            </div>

            <TodoList todos={filtered} toggle={toggle} remove={remove} />
          </>
        )}
      </ErrorBoundary>
    </div>
  )
}
