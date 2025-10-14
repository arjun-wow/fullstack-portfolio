import React, { useMemo, useState } from 'react'
import { useTodos } from '../context/TodoContext'
import TodoList from '../components/TodoList'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import CategorySelect from '../components/CategorySelect'

export default function Todos(){
  const { todos, addTodo, toggle, remove } = useTodos()
  const [text, setText] = useState('')
  const [category, setCategory] = useState('General')
  const [filter, setFilter] = useState({ status:'All', category:'All' })
  const [query, setQuery] = useState('')

  const categories = useMemo(() => ['General', ...Array.from(new Set(todos.map(t=>t.category)))], [todos])

  const filtered = useMemo(() => todos.filter(t => {
    if(filter.status==='Completed' && !t.done) return false
    if(filter.status==='Pending' && t.done) return false
    if(filter.category!=='All' && t.category!==filter.category) return false
    if(query && !t.text.toLowerCase().includes(query.toLowerCase())) return false
    return true
  }), [todos, filter, query])

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Todos</h2>
      <div className="bg-white p-4 rounded mb-4">
        <div className="flex gap-2">
          <input value={text} onChange={e=>setText(e.target.value)} placeholder="New todo" className="border p-2 rounded flex-1" />
          <CategorySelect value={category} onChange={setCategory} categories={categories} />
          <button onClick={() => { if(text.trim()){ addTodo(text, category); setText('') }}} className="bg-blue-600 text-white px-3 py-2 rounded">Add</button>
        </div>
      </div>

      <div className="mb-4">
        <FilterBar filter={filter} setFilter={setFilter} categories={categories} />
        <div className="mt-2"><SearchBar query={query} setQuery={setQuery} /></div>
      </div>

      <TodoList todos={filtered} onToggle={toggle} onDelete={remove} />
    </div>
  )
}
