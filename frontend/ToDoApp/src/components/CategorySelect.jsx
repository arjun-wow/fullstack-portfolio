import React from 'react'
export default function CategorySelect({ value, onChange, categories }){
  return (
    <select value={value} onChange={e => onChange(e.target.value)} className="border p-2 rounded">
      {categories.map(c => <option key={c} value={c}>{c}</option>)}
    </select>
  )
}
