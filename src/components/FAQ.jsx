import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What services does Magic Unbound offer?',
    a: 'We offer an end-to-end creative and technology service: branding and visual identity, web design and development, digital product design, content and copywriting, and AI-powered workflow automation. We can engage on individual services or as a full-stack partner.',
  },
  {
    q: 'How are you different from other agencies?',
    a: 'We are a small, senior team — you work directly with the people doing the work, not account managers. We bring both creative and technical depth in-house, which means fewer handoffs and higher coherence across your project.',
  },
  {
    q: 'Do you work with startups or only established companies?',
    a: 'Both. We have worked with pre-seed founders building their first brand and with established companies running digital transformation programmes. What matters more than stage is ambition — we work best with organizations that take design and technology seriously as strategic levers.',
  },
  {
    q: 'What is your pricing model?',
    a: 'We work on project-based pricing for defined-scope engagements and retainer arrangements for ongoing partnerships. We provide fixed-price proposals after an initial discovery conversation — no hourly billing or surprise invoices.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A brand identity project typically takes 4–6 weeks. A website design and build ranges from 6–12 weeks. AI workflow projects vary but we aim to deliver meaningful automation within 4–8 weeks. We will scope the timeline clearly before any work begins.',
  },
  {
    q: 'Do you work with clients outside Singapore?',
    a: 'Yes — a significant portion of our clients are based in Southeast Asia, South Asia, and the Middle East. We work asynchronously by default and schedule live calls around your timezone.',
  },
]

function PlusIcon({ open }) {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
      style={{
        transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), color 0.2s ease',
        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        flexShrink: 0, color: open ? '#F05A28' : 'var(--text-3)',
      }}
    >
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  )
}

function AccordionItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderBottom: '1px solid var(--border)', transition: 'border-color 0.35s ease' }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 24,
          padding: '28px 0', background: 'none', border: 'none',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 12, fontWeight: 500, color: isOpen ? '#F05A28' : 'var(--text-4)',
            letterSpacing: '0.04em', width: 24, flexShrink: 0,
            transition: 'color 0.25s ease',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 'clamp(15px, 2vw, 18px)',
            fontWeight: 600, color: 'var(--text)',
            letterSpacing: '-0.02em', lineHeight: 1.3,
            transition: 'color 0.35s ease',
          }}>
            {item.q}
          </span>
        </div>
        <PlusIcon open={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: 15, color: 'var(--text-2)',
              lineHeight: 1.75, letterSpacing: '-0.01em',
              paddingLeft: 44, paddingBottom: 28,
              transition: 'color 0.35s ease',
            }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" style={{
      padding: '120px 0',
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}
          className="faq-layout"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'sticky', top: 96 }}
          >
            <p className="label" style={{ marginBottom: 16 }}>FAQ</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
              Questions<br />answered.
            </h2>
            <p style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: 15, color: 'var(--text-2)',
              lineHeight: 1.65, letterSpacing: '-0.01em',
              marginTop: 20, transition: 'color 0.35s ease',
            }}>
              Can't find what you're looking for?{' '}
              <a href="#contact" style={{ color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Get in touch.
              </a>
            </p>
          </motion.div>

          {/* Right */}
          <div style={{ borderTop: '1px solid var(--border)', transition: 'border-color 0.35s ease' }}>
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .faq-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
