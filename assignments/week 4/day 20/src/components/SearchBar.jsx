import React from 'react'

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search">
      <input placeholder="Search todos..." value={query} onChange={e => setQuery(e.target.value)} className="input" />
    </div>
  )
}
