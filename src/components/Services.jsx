import { useRef } from 'react'
import { motion } from 'framer-motion'

function ArrowRightIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

const PILLARS = [
  {
    id: 'systems',
    label: 'Systems, ERP & Automation',
    headline: 'Systems that make work easier.',
    body: 'For businesses outgrowing WhatsApp, spreadsheets, manual follow-ups, and scattered operations. We build the custom infrastructure that makes your team unstoppable.',
    services: ['Custom ERP', 'Internal Dashboards', 'AI Assistants', 'Workflow Automation', 'Client Portals', 'Custom Apps', 'Tool Integrations'],
    cta: 'Fix My Operations',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    id: 'web',
    label: 'Websites & Digital Experiences',
    headline: 'Websites that sell clearly.',
    body: 'Fast, polished, conversion-focused websites that explain your business and turn visitors into leads. From landing pages to full web apps.',
    services: ['Web Design', 'Web Development', 'Landing Pages', 'Web Apps', 'UX/UI Design', 'SEO Foundations', 'CMS Websites'],
    cta: 'Build My Website',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    id: 'brand',
    label: 'Brand & Content',
    headline: 'Brands people trust.',
    body: 'Strategy, identity, messaging, content, and campaigns for businesses that need to look as good as they are.',
    services: ['Brand Strategy', 'Visual Identity', 'Messaging', 'Copywriting', 'Content Marketing', 'Social Media', 'Campaigns'],
    cta: 'Shape My Brand',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
]

function ServiceTag({ label, dark }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      fontSize: 12, fontWeight: 500, letterSpacing: '-0.01em',
      padding: '4px 11px', borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.10)' : 'var(--tag-bg)',
      border: `1px solid ${dark ? 'rgba(255,255,255,0.14)' : 'var(--tag-border)'}`,
      color: dark ? 'rgba(255,255,255,0.72)' : 'var(--tag-text)',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}

/* 3D tilt card wrapper */
function TiltCard({ children, style, onMouseEnter, onMouseLeave }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    card.style.transform = `perspective(800px) rotateX(${-dy * 2.5}deg) rotateY(${dx * 2.5}deg) scale(1.01)`
    if (onMouseEnter) onMouseEnter(e)
  }

  const handleLeave = (e) => {
    const card = ref.current
    if (card) card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
    if (onMouseLeave) onMouseLeave(e)
  }

  return (
    <div
      ref={ref}
      style={{ ...style, transition: 'transform 0.35s ease, border-color 0.25s ease, box-shadow 0.25s ease' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}

function SystemsCard({ pillar }) {
  return (
    <TiltCard style={{
      background: '#111111',
      borderRadius: 20,
      padding: '48px 48px 44px',
      display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '60%', height: '100%',
        background: 'radial-gradient(ellipse at top right, rgba(240,90,40,0.18) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Grid decoration */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at bottom left, black 0%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at bottom left, black 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 32, alignSelf: 'flex-start' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F05A28', display: 'inline-block' }} />
          <span style={{
            fontSize: 11, fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
          }}>
            {pillar.label}
          </span>
          <div style={{ marginLeft: 8 }}>{pillar.icon}</div>
        </div>

        <h3 style={{
          fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: '-0.04em', color: '#ffffff', marginBottom: 20,
        }}>
          {pillar.headline}
        </h3>

        <p style={{
          fontSize: 16, color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.65, letterSpacing: '-0.01em',
          marginBottom: 32, maxWidth: 520,
        }}>
          {pillar.body}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
          {pillar.services.map(s => <ServiceTag key={s} label={s} dark />)}
        </div>

        <a
          href="#contact"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#F05A28', color: '#fff',
            fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em',
            padding: '12px 24px', borderRadius: 100, textDecoration: 'none',
            alignSelf: 'flex-start',
            transition: 'background 0.2s ease, transform 0.15s ease',
            boxShadow: '0 4px 20px rgba(240,90,40,0.4)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#D94E20'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#F05A28'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          {pillar.cta}
          <ArrowRightIcon />
        </a>
      </div>
    </TiltCard>
  )
}

function WebCard({ pillar }) {
  return (
    <TiltCard
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: 20,
        padding: '40px 36px',
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--border-2)'
        el.style.boxShadow = 'var(--shadow-sm)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--card-border)'
        el.style.boxShadow = 'none'
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 2,
        background: 'linear-gradient(90deg, #F05A28 0%, transparent 70%)',
        borderRadius: '20px 20px 0 0',
      }} />

      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 28, marginTop: 8 }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#F05A28', display: 'inline-block' }} />
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-3)' }}>
          {pillar.label}
        </span>
        <div style={{ marginLeft: 6 }}>{pillar.icon}</div>
      </div>

      <h3 style={{
        fontSize: 'clamp(24px, 3vw, 34px)',
        fontWeight: 800, lineHeight: 1.1,
        letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: 16,
        transition: 'color 0.35s ease',
      }}>
        {pillar.headline}
      </h3>

      <p style={{
        fontSize: 14, color: 'var(--text-2)',
        lineHeight: 1.7, letterSpacing: '-0.01em',
        marginBottom: 28, flex: 1, transition: 'color 0.35s ease',
      }}>
        {pillar.body}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 32 }}>
        {pillar.services.map(s => <ServiceTag key={s} label={s} />)}
      </div>

      <a
        href="#contact"
        className="btn-primary"
        style={{ alignSelf: 'flex-start', fontSize: 13, padding: '10px 20px' }}
      >
        {pillar.cta}
        <ArrowRightIcon size={13} />
      </a>
    </TiltCard>
  )
}

function BrandCard({ pillar }) {
  return (
    <TiltCard
      style={{
        background: 'var(--bg-2)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        padding: '40px 36px',
        display: 'flex', flexDirection: 'column',
        transition: 'background 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--bg-3)'
        e.currentTarget.style.borderColor = 'var(--border-2)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--bg-2)'
        e.currentTarget.style.borderColor = 'var(--border)'
      }}
    >
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 28 }}>
        <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--text-4)', display: 'inline-block', transition: 'background 0.35s ease' }} />
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-3)', transition: 'color 0.35s ease' }}>
          {pillar.label}
        </span>
        <div style={{ marginLeft: 6 }}>{pillar.icon}</div>
      </div>

      <h3 style={{
        fontSize: 'clamp(22px, 2.5vw, 30px)',
        fontWeight: 700, lineHeight: 1.15,
        letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: 14,
        transition: 'color 0.35s ease',
      }}>
        {pillar.headline}
      </h3>

      <p style={{
        fontSize: 14, color: 'var(--text-2)',
        lineHeight: 1.7, letterSpacing: '-0.01em',
        marginBottom: 24, flex: 1, transition: 'color 0.35s ease',
      }}>
        {pillar.body}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
        {pillar.services.map(s => <ServiceTag key={s} label={s} />)}
      </div>

      <a href="#contact" className="btn-ghost" style={{ alignSelf: 'flex-start', fontSize: 13, padding: '10px 20px' }}>
        {pillar.cta}
      </a>
    </TiltCard>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  const [systems, web, brand] = PILLARS

  return (
    <section id="services" style={{
      padding: '120px 0',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">

        {/* Header */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', marginBottom: 56,
            flexWrap: 'wrap', gap: 24,
          }}
        >
          <motion.div variants={fadeUp}>
            <p className="label" style={{ marginBottom: 16 }}>What We Build</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
              Three ways we<br />move you forward.
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} style={{
            fontSize: 15, color: 'var(--text-2)',
            lineHeight: 1.65, maxWidth: 320, letterSpacing: '-0.01em',
            textAlign: 'right', transition: 'color 0.35s ease',
          }}>
            Brand, websites, and systems — the three pillars every growing business needs working together.
          </motion.p>
        </motion.div>

        {/* Systems — full width */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 16 }}
        >
          <SystemsCard pillar={systems} />
        </motion.div>

        {/* Websites + Brand — side by side */}
        <div className="services-bottom-row">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <WebCard pillar={web} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrandCard pillar={brand} />
          </motion.div>
        </div>
      </div>

      <style>{`
        .services-bottom-row {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 16px;
        }
        @media (max-width: 840px) {
          .services-bottom-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
