import { Link } from 'react-router-dom'

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

const socials = [
  { Icon: XIcon,         href: '#', label: 'X / Twitter' },
  { Icon: LinkedInIcon,  href: '#', label: 'LinkedIn' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Sitemap']

function SocialIcon({ Icon, href, label }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        width: 34, height: 34, borderRadius: '50%',
        border: '1px solid var(--border)', background: 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--text-3)', textDecoration: 'none',
        transition: 'background 0.2s, border-color 0.2s, color 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-2)'; e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-3)' }}
    >
      <Icon />
    </a>
  )
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        fontSize: 14, color: 'var(--text-2)', textDecoration: 'none',
        letterSpacing: '-0.01em', transition: 'color 0.2s', display: 'block',
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
    >
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-2)',
      padding: '72px 0 40px',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">
        <div className="footer-grid" style={{ marginBottom: 64 }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: 20 }}>
              <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-0.04em', color: 'var(--text)', transition: 'color 0.35s ease' }}>
                Magic Unbound<span style={{ color: '#F05A28' }}>.</span>
              </span>
            </Link>
            <p style={{
              fontSize: 14, color: 'var(--text-3)', lineHeight: 1.65,
              maxWidth: 240, marginBottom: 28, letterSpacing: '-0.01em', transition: 'color 0.35s ease',
            }}>
              A creative-tech studio helping ambitious businesses look sharper, sell better, and run smoother.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {socials.map(s => <SocialIcon key={s.label} {...s} />)}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 20, transition: 'color 0.35s ease' }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Home',      to: '/' },
                { label: 'About',     to: '/about' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Blog',      to: '/blog' },
                { label: 'Contact',   to: '/contact' },
              ].map(l => (
                <li key={l.to}><FooterLink to={l.to}>{l.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 20, transition: 'color 0.35s ease' }}>
              Services
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Systems & ERP',      to: '/services/systems' },
                { label: 'Websites & Digital', to: '/services/websites' },
                { label: 'Brand & Content',    to: '/services/brand' },
                { label: 'All Services',       to: '/services' },
              ].map(s => (
                <li key={s.to}><FooterLink to={s.to}>{s.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 20, transition: 'color 0.35s ease' }}>
              Contact
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li>
                <a href="mailto:hello@magicunbound.co" style={{ fontSize: 14, color: 'var(--text-2)', textDecoration: 'none', letterSpacing: '-0.01em', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
                >
                  hello@magicunbound.co
                </a>
              </li>
              <li>
                <a href="tel:+94771674204" style={{ fontSize: 14, color: 'var(--text-2)', textDecoration: 'none', letterSpacing: '-0.01em', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
                >
                  +94 77 167 4204
                </a>
              </li>
              <li style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.5, letterSpacing: '-0.01em', transition: 'color 0.35s ease' }}>
                3 Shenton Way, #19-02<br />Singapore 068805
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)', paddingTop: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16, transition: 'border-color 0.35s ease',
        }}>
          <p style={{ fontSize: 13, color: 'var(--text-4)', letterSpacing: '-0.01em', transition: 'color 0.35s ease' }}>
            © 2019–2026 Magic Unbound Pte. Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 28 }}>
            {legalLinks.map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: 'var(--text-4)', textDecoration: 'none', letterSpacing: '-0.01em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-2)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-4)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
