import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = ({ isActive }) => ({
  padding: '8px 12px',
  textDecoration: 'none',
  borderRadius: 6,
  background: isActive ? '#111827' : 'transparent',
  color: isActive ? 'white' : '#111827'
})

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <h1 className="brand">Todo App</h1>
        <div className="links">
          <NavLink to="/" style={activeStyle}>Home</NavLink>
          <NavLink to="/todos" style={activeStyle}>Todos</NavLink>
          <NavLink to="/about" style={activeStyle}>About</NavLink>
        </div>
      </div>
    </nav>
  )
}
