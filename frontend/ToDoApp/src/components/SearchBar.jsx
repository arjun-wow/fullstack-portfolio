import React from 'react'

export default function SearchBar({ query, setQuery }){
  return <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search todos..." className="border p-2 rounded w-full" />
}
