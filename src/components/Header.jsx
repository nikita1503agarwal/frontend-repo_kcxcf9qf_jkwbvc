import { Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/appointments', label: 'Appointments & Prescriptions' },
  { to: '/services', label: 'Our Services' },
  { to: '/team', label: 'Meet the Team' },
  { to: '/info', label: 'Patient Information' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between" role="navigation" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3" aria-label="Thorkhill Surgery home">
          <div className="w-9 h-9 rounded-full bg-blue-700 text-white grid place-items-center font-bold">TS</div>
          <div>
            <p className="text-slate-900 font-semibold leading-tight">Thorkhill Surgery</p>
            <p className="text-xs text-slate-600">High-quality local NHS care</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded px-1 ${isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-800'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <Menu className="w-6 h-6 text-slate-900" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-2 grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block py-2 text-sm ${isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-800'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
