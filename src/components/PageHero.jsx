import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function ChevronRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  )
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

/**
 * Inner-page hero — consistent across all non-home pages.
 * @param {string} label         - eyebrow label (uppercase)
 * @param {string|ReactNode} title - main heading
 * @param {string} subtitle      - optional body text
 * @param {Array}  breadcrumb    - [{label, href}] array; last item = current page
 * @param {ReactNode} actions    - optional CTAs
 * @param {string} bg            - optional background override ('var(--bg)' | 'var(--bg-2)')
 */
export default function PageHero({ label, title, subtitle, breadcrumb, actions, bg = 'var(--bg)' }) {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: 160,
        paddingBottom: 80,
        paddingLeft: 40,
        paddingRight: 40,
        background: bg,
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        transition: 'background 0.35s ease',
      }}
    >
      {/* Dot-grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        opacity: 0.45,
      }} />

      {/* Accent glow */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: '40vw', height: '60vh',
        background: 'radial-gradient(ellipse at center, rgba(240,90,40,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1260, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Breadcrumb"
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              marginBottom: 32, flexWrap: 'wrap',
            }}
          >
            <Link
              to="/"
              style={{ fontSize: 13, color: 'var(--text-4)', textDecoration: 'none', letterSpacing: '-0.01em', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-3)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-4)'}
            >
              Home
            </Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: 'var(--text-4)', display: 'flex' }}><ChevronRight /></span>
                {i === breadcrumb.length - 1 ? (
                  <span style={{ fontSize: 13, color: 'var(--text-3)', letterSpacing: '-0.01em' }}>{crumb.label}</span>
                ) : (
                  <Link
                    to={crumb.href}
                    style={{ fontSize: 13, color: 'var(--text-4)', textDecoration: 'none', letterSpacing: '-0.01em', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-3)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-4)'}
                  >
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.div variants={stagger} initial="hidden" animate="show">
          {label && (
            <motion.p variants={fadeUp} className="label" style={{ marginBottom: 20 }}>
              {label}
            </motion.p>
          )}

          <motion.h1
            variants={fadeUp}
            style={{
              fontSize: 'clamp(36px, 6vw, 76px)',
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
              maxWidth: 820,
              marginBottom: subtitle ? 28 : (actions ? 36 : 0),
              transition: 'color 0.35s ease',
            }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 'clamp(16px, 1.6vw, 19px)',
                color: 'var(--text-2)',
                lineHeight: 1.7,
                letterSpacing: '-0.01em',
                maxWidth: 560,
                marginBottom: actions ? 36 : 0,
                transition: 'color 0.35s ease',
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {actions && (
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {actions}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
