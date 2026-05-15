import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { SERVICES } from '../data/services'

export default function ServicesDetail() {
  const { slug } = useParams()
  const service = SERVICES.find(s => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <PageHero
        label={service.label}
        title={<>{service.headline}</>}
        subtitle={service.body}
        breadcrumb={[
          { label: 'Services', href: '/services' },
          { label: service.label.split(',')[0], href: `/services/${service.slug}` },
        ]}
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
              Start this project
            </Link>
            <Link to="/portfolio" className="btn-ghost">See our work</Link>
          </>
        }
      />

      {/* Offerings */}
      <section style={{ padding: '100px 0', background: 'var(--bg)', borderBottom: '1px solid var(--border)', transition: 'background 0.35s ease' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 56 }}
          >
            <p className="label" style={{ marginBottom: 16 }}>What's Included</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              Every engagement<br />is different. These are<br />the building blocks.
            </h2>
          </motion.div>
          <div className="sd-offerings-grid">
            {service.offerings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="card"
                style={{ padding: '32px 28px' }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 10 }}>{o.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65 }}>{o.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '100px 0', background: 'var(--bg-2)', borderBottom: '1px solid var(--border)', transition: 'background 0.35s ease' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 56 }}
          >
            <p className="label" style={{ marginBottom: 16 }}>How It Works</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              A clear process.<br />No guesswork.
            </h2>
          </motion.div>
          <div className="sd-process-grid">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ padding: '36px 32px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 16 }}
              >
                <div style={{ fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-0.06em', color: 'var(--border-2)', lineHeight: 1, marginBottom: 20 }}>{p.step}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65 }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '100px 0', background: 'var(--bg)', borderBottom: '1px solid var(--border)', transition: 'background 0.35s ease' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 48 }}
          >
            <p className="label" style={{ marginBottom: 16 }}>Common Questions</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
              Before you ask,<br />we've been asked.
            </h2>
          </motion.div>
          {service.faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderBottom: '1px solid var(--border)', padding: '28px 0', transition: 'border-color 0.35s ease' }}
            >
              <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 12 }}>{faq.q}</h3>
              <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7, letterSpacing: '-0.01em' }}>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 0', background: 'var(--bg)', transition: 'background 0.35s ease' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label" style={{ marginBottom: 20, display: 'block' }}>Ready?</p>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.04em', color: 'var(--text)', marginBottom: 24 }}>
              Let's talk about<br />your project.
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
              <Link to="/services" className="btn-ghost">All services</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .sd-offerings-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        .sd-process-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        @media (max-width: 1024px) {
          .sd-offerings-grid { grid-template-columns: repeat(2, 1fr); }
          .sd-process-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .sd-offerings-grid { grid-template-columns: 1fr; }
          .sd-process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
