import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-cyan-100 flex justify-start p-5 text-2xl font-sans font-bold">
        <div className="flex gap-5">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-white')}>
            Home
        </NavLink>
        <NavLink to="/analyze" className={({ isActive }) => (isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-white')}>
            Analyze
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-white')}>
            About
        </NavLink>
        <NavLink to="/sample" className={({ isActive }) => (isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-white')}>
            Sample
        </NavLink>
        </div>
    </nav>
  )
}

export default Navbar