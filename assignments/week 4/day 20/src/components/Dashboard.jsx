import React, { useMemo } from 'react'

export default function Dashboard({ todos }) {
  const stats = useMemo(() => {
    const total = todos.length
    const completed = todos.filter(t => t.done).length
    const pending = total - completed
    const byCategory = todos.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + 1
      return acc
    }, {})
    return { total, completed, pending, byCategory }
  }, [todos])

  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <p>Total: {stats.total}</p>
      <p>Completed: {stats.completed}</p>
      <p>Pending: {stats.pending}</p>
      <div style={{marginTop:8}}>
        <h4 style={{margin:'6px 0'}}>By Category</h4>
        <ul style={{paddingLeft:16, margin:0}}>
          {Object.entries(stats.byCategory).map(([k,v]) => <li key={k}>{k}: {v}</li>)}
        </ul>
      </div>
    </div>
  )
}
