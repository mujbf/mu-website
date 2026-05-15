import { motion } from 'framer-motion'

function ArrowRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

const PRODUCTS = [
  {
    id: 'penclip',
    name: 'Penclip',
    tagline: 'Write less. Say more.',
    description: 'A focused writing tool built for people who think fast and write clearly. Penclip strips away the noise so the ideas come through.',
    status: 'In development',
    accent: '#6366F1',
    mockBg: 'linear-gradient(135deg, #0f0c2e 0%, #1a1560 40%, #0e1040 100%)',
    mockAccent: 'rgba(99,102,241,0.4)',
    mockLines: [
      { w: '75%', o: 1 },
      { w: '90%', o: 0.6 },
      { w: '55%', o: 0.6 },
      { w: '80%', o: 0.35 },
      { w: '40%', o: 0.35 },
    ],
  },
  {
    id: 'garageos',
    name: 'GarageOS',
    tagline: 'Run your garage like a real business.',
    description: 'An operations platform for automotive garages — bookings, inventory, job cards, invoicing, and customer history in one place.',
    status: 'Live',
    accent: '#10B981',
    mockBg: 'linear-gradient(135deg, #041008 0%, #0a2414 40%, #061808 100%)',
    mockAccent: 'rgba(16,185,129,0.35)',
    mockLines: [
      { w: '65%', o: 1 },
      { w: '85%', o: 0.6 },
      { w: '50%', o: 0.6 },
      { w: '70%', o: 0.35 },
      { w: '35%', o: 0.35 },
    ],
  },
]

function MockScreen({ product }) {
  const bgBase = product.mockBg.includes('#041008') ? '#041008' : '#0f0c2e'

  return (
    <div style={{
      background: product.mockBg,
      borderRadius: '10px 10px 0 0',
      padding: '20px 20px 0',
      position: 'relative',
      overflow: 'hidden',
      height: 200,
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: 0, left: '20%',
        width: '60%', height: '80%',
        background: `radial-gradient(ellipse at top, ${product.mockAccent} 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Window chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16, position: 'relative', zIndex: 1 }}>
        {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
          <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.8 }} />
        ))}
      </div>

      {/* Fake content lines */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'relative', zIndex: 1 }}>
        {product.mockLines.map((line, i) => (
          <div key={i} style={{
            height: i === 0 ? 10 : 7,
            width: line.w,
            borderRadius: 4,
            background: `rgba(255,255,255,${line.o})`,
          }} />
        ))}
        {/* Blinking cursor */}
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'steps(1)', repeatDelay: 0.1 }}
          style={{
            width: 7, height: 13,
            background: `${product.accent}`,
            borderRadius: 1,
            opacity: 0.9,
          }}
        />
      </div>

      {/* Fade to card bottom */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 60,
        background: `linear-gradient(to bottom, transparent, ${bgBase})`,
        pointerEvents: 'none',
      }} />
    </div>
  )
}

function ProductCard({ product, index }) {
  const isLive = product.status === 'Live'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: 20, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
      }}
      whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
      // Framer motion overrides the inline transition for y — provide both
    >
      <MockScreen product={product} />

      <div style={{ padding: '28px 32px 32px', display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 16, alignSelf: 'flex-start' }}>
          <span
            className={isLive ? 'status-live' : 'status-building'}
            style={{
              width: 6, height: 6, borderRadius: '50%',
              background: isLive ? '#10B981' : '#F59E0B',
              display: 'inline-block',
            }}
          />
          <span style={{
            fontSize: 11, fontWeight: 500, letterSpacing: '0.07em',
            textTransform: 'uppercase', color: 'var(--text-3)',
            transition: 'color 0.35s ease',
          }}>
            {product.status}
          </span>
        </div>

        <h3 style={{
          fontSize: 28, fontWeight: 800, letterSpacing: '-0.04em',
          color: 'var(--text)', marginBottom: 8, transition: 'color 0.35s ease',
        }}>
          {product.name}
        </h3>

        <p style={{
          fontSize: 14, fontWeight: 600, color: 'var(--text-3)',
          letterSpacing: '-0.01em', marginBottom: 16, transition: 'color 0.35s ease',
        }}>
          {product.tagline}
        </p>

        <p style={{
          fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7,
          letterSpacing: '-0.01em', flex: 1, marginBottom: 24,
          transition: 'color 0.35s ease',
        }}>
          {product.description}
        </p>

        <a
          href="#"
          className="btn-ghost"
          style={{ alignSelf: 'flex-start', fontSize: 13, padding: '9px 18px' }}
        >
          Learn more <ArrowRightIcon />
        </a>
      </div>
    </motion.div>
  )
}

export default function Products() {
  return (
    <section id="products" style={{
      padding: '120px 0',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 56 }}
        >
          <p className="label" style={{ marginBottom: 16 }}>Our Products</p>
          <div style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
          }}>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
              We build our<br />own products too.
            </h2>
            <p style={{
              fontSize: 15, color: 'var(--text-2)',
              lineHeight: 1.65, maxWidth: 360, letterSpacing: '-0.01em',
              textAlign: 'right', transition: 'color 0.35s ease',
            }}>
              First-hand experience building, launching, and improving real software means our client work isn't just pretty — it's practical.
            </p>
          </div>
        </motion.div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}
          className="products-grid"
        >
          {PRODUCTS.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .products-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
