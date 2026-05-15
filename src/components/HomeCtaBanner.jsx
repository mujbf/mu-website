import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function HomeCtaBanner() {
  return (
    <section style={{
      padding: '100px 40px',
      background: '#0A0A0A',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid decoration */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '-40%', left: '50%',
        transform: 'translateX(-50%)',
        width: '60vw', height: '80vh',
        background: 'radial-gradient(ellipse at center, rgba(240,90,40,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: 1260, margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 48,
          flexWrap: 'wrap',
          position: 'relative', zIndex: 1,
        }}
      >
        <div style={{ flex: '1 1 480px' }}>
          <p style={{
            fontSize: 12, fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: 20,
          }}>
            Ready to start?
          </p>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 800, lineHeight: 1.04,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            marginBottom: 20,
          }}>
            Let's build something<br />
            <span style={{ color: '#F05A28' }}>you're proud of.</span>
          </h2>
          <p style={{
            fontSize: 17, color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.65, letterSpacing: '-0.01em',
            maxWidth: 460,
          }}>
            Whether it's a brand, a website, a system, or all three — we are ready to scope it, price it, and build it.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flexShrink: 0, alignItems: 'flex-start' }}>
          <Link
            to="/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#F05A28', color: '#fff',
              fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em',
              padding: '14px 28px', borderRadius: 100, textDecoration: 'none',
              transition: 'background 0.2s ease, transform 0.15s ease',
              boxShadow: '0 4px 24px rgba(240,90,40,0.4)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#D94E20'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#F05A28'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Start a conversation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
          <Link
            to="/portfolio"
            style={{
              fontSize: 14, color: 'rgba(255,255,255,0.45)',
              textDecoration: 'none', letterSpacing: '-0.01em',
              display: 'inline-flex', alignItems: 'center', gap: 6,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
          >
            Or view our work first →
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
