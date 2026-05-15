import { motion } from 'framer-motion'

const PILLARS = [
  'Strategy that understands your business goals, not just the brief',
  'Design-led thinking applied to brand, product, and systems',
  'Technology used as a creative and commercial enabler',
  'Long-term partnerships built on measurable outcomes',
]

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" style={{
      padding: '140px 0',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
          className="about-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label" style={{ marginBottom: 24 }}>About Us</p>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 800, lineHeight: 1.05,
              letterSpacing: '-0.04em', color: 'var(--text)',
              marginBottom: 28, transition: 'color 0.35s ease',
            }}>
              Not just an agency.
              <br />
              <span style={{ color: 'var(--text-3)' }}>A growth system.</span>
            </h2>
            <p style={{
              fontSize: 17, color: 'var(--text-2)',
              lineHeight: 1.7, letterSpacing: '-0.01em',
              marginBottom: 20, transition: 'color 0.35s ease',
            }}>
              Magic Unbound is a creative-tech studio based in Singapore. We work with founders, operators, and growth teams who are tired of managing five different vendors and getting five different answers.
            </p>
            <p style={{
              fontSize: 17, color: 'var(--text-2)',
              lineHeight: 1.7, letterSpacing: '-0.01em',
              marginBottom: 40, transition: 'color 0.35s ease',
            }}>
              We combine brand, web, software, and automation into one cohesive system — because that's what actually moves businesses forward.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#F05A28', color: '#fff',
                fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em',
                padding: '12px 22px', borderRadius: 100,
                textDecoration: 'none',
                transition: 'background 0.2s ease, transform 0.15s ease',
                boxShadow: '0 4px 20px rgba(240,90,40,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#D94E20'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#F05A28'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Work with us
            </a>
          </motion.div>

          {/* Right: animated card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--bg-2)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '40px',
              transition: 'background 0.35s ease, border-color 0.35s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle grid lines */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              opacity: 0.5,
              maskImage: 'radial-gradient(ellipse at top right, black 0%, transparent 65%)',
              WebkitMaskImage: 'radial-gradient(ellipse at top right, black 0%, transparent 65%)',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{
                fontSize: 13, fontWeight: 600,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: 'var(--text-3)', marginBottom: 28,
                transition: 'color 0.35s ease',
              }}>
                How we work
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 22 }}>
                {PILLARS.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}
                  >
                    <div style={{
                      width: 24, height: 24, borderRadius: '50%',
                      border: '1px solid var(--border-2)',
                      background: 'var(--accent-dim)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#F05A28', flexShrink: 0, marginTop: 1,
                    }}>
                      <CheckIcon />
                    </div>
                    <span style={{
                      fontSize: 15, color: 'var(--text-2)',
                      lineHeight: 1.5, letterSpacing: '-0.01em',
                      transition: 'color 0.35s ease',
                    }}>
                      {p}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
