import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import ContactForm from '../components/Contact'

export default function Contact() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title={<>Let's build something<br /><span style={{ color: 'var(--text-3)' }}>great together.</span></>}
        subtitle="Whether you're ready to start or just exploring — we'd love to hear what you're working on. No sales pitch, just a conversation."
        breadcrumb={[{ label: 'Contact', href: '/contact' }]}
      />

      <ContactForm />

      <section style={{ padding: '80px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border)', transition: 'background 0.35s ease' }}>
        <div className="container">
          <div className="contact-info-grid">
            {[
              { label: 'Email', value: 'hello@magicunbound.co', href: 'mailto:hello@magicunbound.co' },
              { label: 'Phone', value: '+94 77 167 4204', href: 'tel:+94771674204' },
              { label: 'Location', value: '3 Shenton Way, #19-02\nSingapore 068805', href: null },
              { label: 'Hours', value: 'Mon–Fri\n9am–6pm SGT', href: null },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="card"
                style={{ padding: '28px 24px' }}
              >
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 10 }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: 15, color: 'var(--text)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F05A28'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                  >{item.value}</a>
                ) : (
                  <p style={{ fontSize: 15, color: 'var(--text)', fontWeight: 500, lineHeight: 1.5, whiteSpace: 'pre-line' }}>{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .contact-info-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        @media (max-width: 900px) { .contact-info-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .contact-info-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
