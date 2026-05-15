import { motion } from 'framer-motion'

const ROWS = [
  ['Messy', 'Clear'],
  ['Manual', 'Automated'],
  ['Scattered', 'Systemised'],
  ['Generic', 'Memorable'],
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const rowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function FlowRow({ from, to, index, isLast }) {
  return (
    <motion.div
      variants={rowVariants}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '16px 0',
        borderBottom: !isLast ? '1px solid var(--border)' : 'none',
        transition: 'border-color 0.35s ease',
      }}
    >
      <span style={{
        fontSize: 14, fontWeight: 500,
        color: 'var(--text-3)',
        letterSpacing: '-0.01em',
        width: 90,
        transition: 'color 0.35s ease',
      }}>
        {from}
      </span>

      {/* Animated line */}
      <div style={{ flex: 1, position: 'relative', height: 1 }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'var(--border-2)',
          opacity: 0.4,
        }} />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, var(--border-2), #F05A28)',
            transformOrigin: 'left',
          }}
        />
      </div>

      <motion.svg
        initial={{ opacity: 0, x: -6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
        width="16" height="16" viewBox="0 0 24 24"
        fill="none" stroke="#F05A28" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <line x1="5" y1="12" x2="19" y2="12"/>
        <polyline points="12 5 19 12 12 19"/>
      </motion.svg>

      <span style={{
        fontSize: 14, fontWeight: 700,
        color: 'var(--text)',
        letterSpacing: '-0.01em',
        width: 100, textAlign: 'right',
        transition: 'color 0.35s ease',
      }}>
        {to}
      </span>
    </motion.div>
  )
}

export default function ProblemFrame() {
  return (
    <section style={{
      padding: '100px 0',
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
          className="problem-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label" style={{ marginBottom: 20 }}>The Real Problem</p>
            <h2 style={{
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
              transition: 'color 0.35s ease',
            }}>
              Most businesses don't have a marketing problem.
              {' '}
              <span style={{ color: 'var(--text-3)' }}>They have a systems problem.</span>
            </h2>
          </motion.div>

          {/* Right */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 17,
                color: 'var(--text-2)',
                lineHeight: 1.72,
                letterSpacing: '-0.01em',
                marginBottom: 40,
                transition: 'color 0.35s ease',
              }}
            >
              Your brand, website, content, tools, and internal processes shouldn't work in isolation. When they do, work gets repeated, leads get lost, and growth slows down.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
            >
              {ROWS.map(([from, to], i) => (
                <FlowRow key={from} from={from} to={to} index={i} isLast={i === ROWS.length - 1} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .problem-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
