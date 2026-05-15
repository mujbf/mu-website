import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About',     to: '/about' },
  { label: 'Services',  to: '/services', hasDropdown: true },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog',      to: '/blog' },
]

const SERVICE_LINKS = [
  { label: 'Systems & ERP',      to: '/services/systems',  desc: 'Operational infrastructure & AI' },
  { label: 'Websites & Digital', to: '/services/websites', desc: 'Sites that convert and perform' },
  { label: 'Brand & Content',    to: '/services/brand',    desc: 'Strategy, identity, and messaging' },
]

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )
}

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const hoverTimeout = useRef(null)

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = to => location.pathname === to || (to !== '/' && location.pathname.startsWith(to + '/'))

  const iconBtnStyle = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 34, height: 34, borderRadius: '50%',
    border: '1px solid var(--border-2)', background: 'transparent',
    color: 'var(--text-3)', cursor: 'pointer',
    transition: 'background 0.2s, border-color 0.2s, color 0.2s',
    padding: 0, flexShrink: 0,
  }

  const handleEnter = () => {
    clearTimeout(hoverTimeout.current)
    setServicesOpen(true)
  }

  const handleLeave = () => {
    hoverTimeout.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.3s ease, border-color 0.3s ease',
      background: scrolled ? 'var(--nav-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-0.04em', color: 'var(--text)', transition: 'color 0.3s ease' }}>
            Magic Unbound<span style={{ color: '#F05A28' }}>.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {NAV_LINKS.map(l => (
            l.hasDropdown ? (
              <div
                key={l.to}
                style={{ position: 'relative' }}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <button
                  className="nav-link"
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    color: isActive(l.to) ? '#F05A28' : 'var(--text-2)',
                    fontWeight: isActive(l.to) ? 500 : 400,
                  }}
                >
                  {l.label}
                  <motion.span
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex' }}
                  >
                    <ChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        position: 'absolute', top: 'calc(100% + 16px)', left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'var(--bg)', border: '1px solid var(--border)',
                        borderRadius: 14, padding: 8, minWidth: 280,
                        boxShadow: 'var(--shadow-md)', zIndex: 200,
                      }}
                      onMouseEnter={handleEnter}
                      onMouseLeave={handleLeave}
                    >
                      <Link
                        to="/services"
                        style={{
                          display: 'block', padding: '10px 14px', borderRadius: 8,
                          fontSize: 13, fontWeight: 600, color: 'var(--text)',
                          textDecoration: 'none', marginBottom: 4, letterSpacing: '-0.02em',
                          transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        All Services →
                      </Link>
                      <div style={{ height: 1, background: 'var(--border)', margin: '4px 0 8px' }} />
                      {SERVICE_LINKS.map(sl => (
                        <Link
                          key={sl.to}
                          to={sl.to}
                          style={{
                            display: 'block', padding: '10px 14px', borderRadius: 8,
                            textDecoration: 'none', transition: 'background 0.15s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                        >
                          <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', letterSpacing: '-0.02em', display: 'block' }}>{sl.label}</span>
                          <span style={{ fontSize: 12, color: 'var(--text-4)', marginTop: 2, display: 'block' }}>{sl.desc}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className="nav-link"
                style={{
                  color: isActive(l.to) ? '#F05A28' : undefined,
                  fontWeight: isActive(l.to) ? 500 : undefined,
                }}
              >
                {l.label}
              </Link>
            )
          ))}
        </nav>

        {/* Right cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            onClick={() => setDark(d => !d)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={iconBtnStyle}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-2)'; e.currentTarget.style.color = 'var(--text)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-3)' }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <Link
            to="/contact"
            className="nav-cta-desktop"
            style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#F05A28', color: '#fff',
              fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em',
              padding: '8px 18px', borderRadius: 100,
              textDecoration: 'none', transition: 'background 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#D94E20'}
            onMouseLeave={e => e.currentTarget.style.background = '#F05A28'}
          >
            Start a Conversation
          </Link>

          <button
            className="nav-mobile-btn"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            style={{ ...iconBtnStyle, border: 'none', borderRadius: 8 }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div style={{
        overflow: 'hidden',
        maxHeight: mobileOpen ? 640 : 0,
        transition: 'max-height 0.38s cubic-bezier(0.4,0,0.2,1), border-color 0.38s',
        background: 'var(--bg)',
        borderTop: mobileOpen ? '1px solid var(--border)' : '1px solid transparent',
      }}>
        <div style={{ padding: '8px 0 20px' }}>
          <Link to="/" onClick={() => setMobileOpen(false)} style={{
            display: 'block', fontSize: 16, fontWeight: 400,
            color: location.pathname === '/' ? '#F05A28' : 'var(--text-2)',
            textDecoration: 'none', padding: '13px 40px', letterSpacing: '-0.01em',
            transition: 'color 0.15s, background 0.15s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >Home</Link>

          {NAV_LINKS.map(l => l.hasDropdown ? (
            <div key={l.to}>
              <button
                onClick={() => setMobileServicesOpen(v => !v)}
                style={{
                  width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  fontSize: 16, fontWeight: 400, color: isActive(l.to) ? '#F05A28' : 'var(--text-2)',
                  padding: '13px 40px', letterSpacing: '-0.01em', transition: 'color 0.15s',
                }}
              >
                {l.label}
                <motion.span
                  animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', marginRight: 0 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>
              <div style={{
                maxHeight: mobileServicesOpen ? 300 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1)',
                background: 'var(--bg-2)',
              }}>
                <Link to="/services" onClick={() => setMobileOpen(false)} style={{
                  display: 'block', fontSize: 14, fontWeight: 600,
                  color: 'var(--text-2)', textDecoration: 'none', padding: '11px 56px',
                }}>All Services</Link>
                {SERVICE_LINKS.map(sl => (
                  <Link key={sl.to} to={sl.to} onClick={() => setMobileOpen(false)} style={{
                    display: 'block', fontSize: 14, color: 'var(--text-2)', textDecoration: 'none', padding: '10px 56px',
                  }}>{sl.label}</Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} style={{
              display: 'block', fontSize: 16, fontWeight: 400,
              color: isActive(l.to) ? '#F05A28' : 'var(--text-2)',
              textDecoration: 'none', padding: '13px 40px', letterSpacing: '-0.01em',
              transition: 'color 0.15s, background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >{l.label}</Link>
          ))}

          <div style={{ padding: '10px 40px 4px' }}>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                background: '#F05A28', color: '#fff',
                fontSize: 14, fontWeight: 500, padding: '12px 22px',
                borderRadius: 100, textDecoration: 'none', transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#D94E20'}
              onMouseLeave={e => e.currentTarget.style.background = '#F05A28'}
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
