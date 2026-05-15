import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import Stats from '../components/Stats'
import FAQ from '../components/FAQ'
import { SERVICES } from '../data/services'

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/services/${service.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div
          style={{
            background: service.dark ? '#0a0a0a' : 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 20,
            overflow: 'hidden',
            transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '' }}
        >
          <div style={{ height: 200, background: service.poster, position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }} />
          </div>
          <div style={{ padding: '32px 36px 36px' }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#F05A28', marginBottom: 12 }}>
              {service.tagline}
            </p>
            <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: service.dark ? '#fff' : 'var(--text)', marginBottom: 14, lineHeight: 1.25 }}>
              {service.headline}
            </h3>
            <p style={{ fontSize: 14, color: service.dark ? 'rgba(255,255,255,0.5)' : 'var(--text-2)', lineHeight: 1.65, marginBottom: 24 }}>
              {service.body}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
              {service.offerings.slice(0, 4).map(o => (
                <span key={o.title} style={{
                  fontSize: 12, padding: '4px 12px', borderRadius: 100,
                  background: service.dark ? 'rgba(255,255,255,0.08)' : 'var(--bg-2)',
                  color: service.dark ? 'rgba(255,255,255,0.6)' : 'var(--text-3)',
                  border: `1px solid ${service.dark ? 'rgba(255,255,255,0.1)' : 'var(--border)'}`,
                }}>
                  {o.title}
                </span>
              ))}
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#F05A28' }}>
              Learn more <ArrowRight />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        label="Services"
        title={<>What we build<br /><span style={{ color: 'var(--text-3)' }}>for you.</span></>}
        subtitle="Three interconnected capabilities. One team. Brand, websites, and operational systems — all built to work together from day one."
        breadcrumb={[{ label: 'Services', href: '/services' }]}
        actions={
          <>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#F05A28', color: '#fff',
              fontSize: 14, fontWeight: 500, padding: '12px 24px',
              borderRadius: 100, textDecoration: 'none', transition: 'background 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#D94E20'}
              onMouseLeave={e => e.currentTarget.style.background = '#F05A28'}
            >
              Start a project
            </Link>
            <Link to="/portfolio" className="btn-ghost">See our work</Link>
          </>
        }
      />

      <section style={{ padding: '100px 0', background: 'var(--bg)', borderBottom: '1px solid var(--border)', transition: 'background 0.35s ease' }}>
        <div className="container">
          <div className="services-page-grid">
            {SERVICES.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: 'var(--bg-2)', borderBottom: '1px solid var(--border)', transition: 'background 0.35s ease' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 56 }}
          >
            <p className="label" style={{ marginBottom: 16 }}>How We Work</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              One team.<br />Zero silos.
            </h2>
          </motion.div>
          <div className="how-we-work-grid">
            {[
              { n: '01', title: 'Discovery first', body: 'Every engagement starts with a dedicated discovery phase. We ask the uncomfortable questions, map the real constraints, and define success before anyone writes a brief.' },
              { n: '02', title: 'Senior people throughout', body: 'You work with senior practitioners from week one — not account managers or juniors who escalate to someone else when things get hard.' },
              { n: '03', title: 'Transparent progress', body: 'Weekly check-ins, shared project management, and honest timelines. No surprises at launch, because nothing is hidden during the build.' },
              { n: '04', title: 'Built to last', body: 'We deliver documentation, training, and handover materials with every engagement. What we build should serve you for years, not months.' },
            ].map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ padding: '36px 32px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 16 }}
              >
                <div style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-0.06em', color: 'var(--border-2)', lineHeight: 1, marginBottom: 16 }}>{item.n}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65 }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <FAQ previewCount={5} />

      <section style={{ padding: '100px 0', background: 'var(--bg)', borderTop: '1px solid var(--border)', transition: 'background 0.35s ease' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label" style={{ marginBottom: 20, display: 'block' }}>Ready to start?</p>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: 24 }}>
              Let's scope your<br />project together.
            </h2>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#F05A28', color: '#fff',
                fontSize: 14, fontWeight: 500, padding: '13px 26px',
                borderRadius: 100, textDecoration: 'none', transition: 'background 0.2s ease',
                boxShadow: '0 4px 20px rgba(240,90,40,0.3)',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#D94E20'}
                onMouseLeave={e => e.currentTarget.style.background = '#F05A28'}
              >
                Start a conversation
              </Link>
              <Link to="/portfolio" className="btn-ghost">View our work</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .services-page-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .how-we-work-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        @media (max-width: 1100px) {
          .services-page-grid { grid-template-columns: 1fr; }
          .how-we-work-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .how-we-work-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
