import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-sand/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-20">
        <Link to="/" aria-label="Succeed home">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-ink-900' : 'text-ink-400 hover:text-ink-900'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/#contact"
            className="rounded-full bg-ink-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-ink-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-ink-900 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`h-0.5 bg-ink-900 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 bg-ink-900 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-100 bg-sand">
          <div className="container-page py-4 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-900 py-1"
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-ink-900 text-white text-sm font-medium px-5 py-3 text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
