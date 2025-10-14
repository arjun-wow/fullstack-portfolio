import React from 'react'
import { useTodos } from '../context/TodoContext'
import DashboardStats from '../components/DashboardStats'

export default function Home(){
  const { todos } = useTodos()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h2 className="text-lg font-semibold mb-2">Welcome</h2>
        <p className="text-sm text-gray-600">This dashboard summarizes todos across categories.</p>
      </div>

      <aside className="">
        <DashboardStats todos={todos} />
      </aside>
    </div>
  )
}
