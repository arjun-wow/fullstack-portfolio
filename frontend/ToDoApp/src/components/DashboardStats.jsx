import React, { useMemo } from 'react'
export default function DashboardStats({ todos }){
  const stats = useMemo(() => {
    const total = todos.length
    const completed = todos.filter(t => t.done).length
    const byCategory = todos.reduce((acc, t) => { acc[t.category] = (acc[t.category]||0)+1; return acc }, {})
    return { total, completed, byCategory }
  }, [todos])

  return (
    <div className="bg-white p-4 rounded shadow-sm space-y-2">
      <div>Total: {stats.total}</div>
      <div>Completed: {stats.completed}</div>
      <div>
        <div className="text-sm font-medium mt-2">By category</div>
        <ul className="text-sm">
          {Object.entries(stats.byCategory).map(([k,v]) => <li key={k}>{k}: {v}</li>)}
        </ul>
      </div>
    </div>
  )
}
