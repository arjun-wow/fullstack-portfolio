import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Welcome</h2>
      <p>This is the Home page for the multi-page Todo app (Day 17 - React Router & Navigation).</p>
      <p>
        Go to <Link to="/todos">Todos</Link> to manage your tasks.
      </p>
    </div>
  )
}
