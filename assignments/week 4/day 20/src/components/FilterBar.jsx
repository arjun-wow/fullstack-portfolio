import React from 'react'

export default function FilterBar({ filter, setFilter, categories }) {
  return (
    <div className="filterbar">
      <div style={{display:'flex',gap:8}}>
        <label>
          Status:
          <select value={filter.status} onChange={e => setFilter(prev => ({...prev, status: e.target.value}))}>
            <option>All</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </label>

        <label>
          Category:
          <select value={filter.category} onChange={e => setFilter(prev => ({...prev, category: e.target.value}))}>
            <option>All</option>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
        </label>
      </div>
    </div>
  )
}
