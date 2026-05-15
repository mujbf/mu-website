import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg)', padding: '120px 24px 80px',
      transition: 'background 0.35s ease',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', maxWidth: 480 }}
      >
        <div style={{
          fontSize: 'clamp(80px, 15vw, 140px)',
          fontWeight: 900, letterSpacing: '-0.06em',
          color: 'var(--border)', lineHeight: 1, marginBottom: 24,
          transition: 'color 0.35s ease',
        }}>
          404
        </div>
        <h1 style={{
          fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 700, letterSpacing: '-0.04em',
          color: 'var(--text)', marginBottom: 16,
        }}>
          Page not found.
        </h1>
        <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 36 }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#F05A28', color: '#fff',
            fontSize: 14, fontWeight: 500, padding: '12px 24px',
            borderRadius: 100, textDecoration: 'none', transition: 'background 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#D94E20'}
            onMouseLeave={e => e.currentTarget.style.background = '#F05A28'}
          >
            Back to home
          </Link>
          <Link to="/contact" className="btn-ghost">Contact us</Link>
        </div>
      </motion.div>
    </section>
  )
}
