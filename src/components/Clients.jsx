import { motion } from 'framer-motion'

const clients = [
  'Stripe', 'Coinbase', 'Airbnb', 'Notion', 'Figma',
  'Linear', 'Vercel', 'Shopify', 'Atlassian', 'Intercom',
]

const clientsReverse = [
  'Anthropic', 'Slack', 'Dropbox', 'HubSpot', 'Twilio',
  'Zendesk', 'Cloudflare', 'Amplitude', 'Segment', 'Mixpanel',
]

function LogoItem({ name }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '0 52px', flexShrink: 0 }}>
      <span
        style={{
          fontFamily: "'Geist', sans-serif",
          fontSize: 15, fontWeight: 700, letterSpacing: '-0.03em',
          color: 'var(--text-4)', whiteSpace: 'nowrap',
          transition: 'color 0.2s, filter 0.2s',
          userSelect: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-3)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-4)'}
      >
        {name}
      </span>
    </div>
  )
}

export default function Clients() {
  return (
    <section
      id="clients"
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '44px 0',
        overflow: 'hidden',
        background: 'var(--bg)',
        transition: 'background 0.35s ease',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="container"
        style={{ marginBottom: 24 }}
      >
        <p className="label">Trusted by organizations worldwide</p>
      </motion.div>

      {/* Forward marquee */}
      <div className="marquee-wrapper" style={{ marginBottom: 16 }}>
        <div className="marquee-track" style={{ display: 'flex', alignItems: 'center' }}>
          {[...clients, ...clients].map((name, i) => (
            <LogoItem key={`fwd-${name}-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Reverse marquee */}
      <div className="marquee-wrapper">
        <div
          className="marquee-track"
          style={{ display: 'flex', alignItems: 'center', animationDirection: 'reverse' }}
        >
          {[...clientsReverse, ...clientsReverse].map((name, i) => (
            <LogoItem key={`rev-${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
