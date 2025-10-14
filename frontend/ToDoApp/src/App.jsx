import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Todos from './pages/Todos'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ErrorBoundary from './components/ErrorBoundary'

export default function App(){
  return (
    <div>
      <header className="bg-white shadow">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="text-xl font-bold">Enterprise Todo</Link>
          <nav className="space-x-4">
            <Link to="/" className="text-sm text-gray-700 hover:text-black">Home</Link>
            <Link to="/todos" className="text-sm text-gray-700 hover:text-black">Todos</Link>
            <Link to="/about" className="text-sm text-gray-700 hover:text-black">About</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/todos" element={<Todos/>} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </ErrorBoundary>
      </main>
    </div>
  )
}
