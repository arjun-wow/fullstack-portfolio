import React from 'react'

export default function FilterBar({ filter, setFilter, categories }){
  return (
    <div className="flex items-center space-x-3">
      <select value={filter.status} onChange={e => setFilter(f => ({...f, status:e.target.value}))} className="border p-2 rounded">
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>

      <select value={filter.category} onChange={e => setFilter(f => ({...f, category:e.target.value}))} className="border p-2 rounded">
        <option value="All">All</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  )
}
