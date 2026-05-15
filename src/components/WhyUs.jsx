import { motion } from 'framer-motion'

const POINTS = [
  { title: 'Strategy that understands business goals', body: 'We ask why before we ask how. Every decision is tied to an outcome your business actually cares about.' },
  { title: 'Design that makes companies look credible', body: 'From brand identity to interface design, we make businesses look as good as they actually are.' },
  { title: 'Websites that explain and convert', body: 'We build sites that do a job: explain the offer clearly and turn the right visitors into leads.' },
  { title: 'Software that solves real operational problems', body: "Custom tools built around how your team actually works — not how a generic SaaS thinks you should." },
  { title: 'Automation that reduces repetitive work', body: 'We find the tasks your team repeats every day and build systems that handle them automatically.' },
  { title: 'Content that keeps the business visible', body: 'Consistent, clear communication that positions your business as the trusted choice in your category.' },
]

function CheckCircle() {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: '50%',
      background: 'var(--accent-dim)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0, marginTop: 1, transition: 'background 0.35s ease',
    }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F05A28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </div>
  )
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function WhyUs() {
  return (
    <section id="why" style={{
      padding: '120px 0',
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 80, alignItems: 'flex-start' }}
          className="why-grid"
        >
          {/* Left: sticky headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'sticky', top: 100 }}
          >
            <p className="label" style={{ marginBottom: 20 }}>Why Magic Unbound</p>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 800, lineHeight: 1.06,
              letterSpacing: '-0.04em', color: 'var(--text)',
              marginBottom: 24, transition: 'color 0.35s ease',
            }}>
              One team for the things that usually fall between teams.
            </h2>
            <p style={{
              fontSize: 16, color: 'var(--text-2)',
              lineHeight: 1.7, letterSpacing: '-0.01em',
              marginBottom: 36, transition: 'color 0.35s ease',
            }}>
              Instead of managing a branding agency, a web developer, a software house, and an automation consultant separately — you work with one team that sees the whole picture.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#F05A28', color: '#fff',
                fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em',
                padding: '12px 22px', borderRadius: 100, textDecoration: 'none',
                transition: 'background 0.2s ease, transform 0.15s ease',
                boxShadow: '0 4px 20px rgba(240,90,40,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#D94E20'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#F05A28'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Start a Conversation
            </a>
          </motion.div>

          {/* Right: staggered points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 18,
                  padding: '28px 0',
                  borderBottom: i < POINTS.length - 1 ? '1px solid var(--border)' : 'none',
                  transition: 'border-color 0.35s ease',
                }}
                whileHover={{ x: 4, transition: { type: 'spring', stiffness: 300, damping: 25 } }}
              >
                <CheckCircle />
                <div>
                  <h3 style={{
                    fontSize: 16, fontWeight: 600, color: 'var(--text)',
                    letterSpacing: '-0.02em', marginBottom: 6, lineHeight: 1.3,
                    transition: 'color 0.35s ease',
                  }}>
                    {point.title}
                  </h3>
                  <p style={{
                    fontSize: 14, color: 'var(--text-2)',
                    lineHeight: 1.65, letterSpacing: '-0.01em',
                    transition: 'color 0.35s ease',
                  }}>
                    {point.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .why-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  )
}
