import React from 'react'

export default function CategorySelect({ value, onChange, categories }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)} className="input" style={{maxWidth:160}}>
      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
    </select>
  )
}
