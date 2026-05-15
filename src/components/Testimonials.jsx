import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: 'Hakiem has a solid understanding of capital markets and brings that insight into meaningful, well-aligned content. The quality of output consistently exceeded our expectations.',
    author: 'Dilan Jayakody',
    role: 'Director, JB Financial',
    initials: 'DJ',
  },
  {
    quote: 'Magic Unbound transformed our image and elevated us to coveted status, increasing visibility and employer appeal significantly. They understood our brief immediately.',
    author: 'Ishara Walpola',
    role: 'Head of Marketing, Calcey',
    initials: 'IW',
  },
]

function QuoteIcon() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
      <path
        d="M0 24V14.4C0 10.32 1.07 7.04 3.2 4.56 5.33 2 8.16 0.48 11.68 0L12.8 2.4C10.4 2.96 8.56 4.08 7.36 5.76 6.24 7.36 5.68 9.2 5.68 11.28H11.6V24H0ZM19.2 24V14.4C19.2 10.32 20.27 7.04 22.4 4.56 24.53 2 27.36 0.48 30.88 0L32 2.4C29.6 2.96 27.76 4.08 26.56 5.76 25.44 7.36 24.88 9.2 24.88 11.28H30.8V24H19.2Z"
        fill="var(--border-2)"
      />
    </svg>
  )
}

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F05A28" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

function TestiCard({ t, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="card"
      style={{ padding: '44px 40px', display: 'flex', flexDirection: 'column', gap: 28 }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <QuoteIcon />
        <StarRating />
      </div>

      <p style={{
        fontFamily: "'Geist', sans-serif",
        fontSize: 17, color: 'var(--text)',
        lineHeight: 1.7, letterSpacing: '-0.01em',
        fontWeight: 400, flex: 1, fontStyle: 'italic',
        transition: 'color 0.35s ease',
      }}>
        "{t.quote}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--bg-3) 0%, var(--bg-2) 100%)',
          border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Geist', sans-serif",
          fontSize: 14, fontWeight: 700, color: '#F05A28',
          flexShrink: 0, letterSpacing: '-0.01em',
        }}>
          {t.initials}
        </div>
        <div>
          <div style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 15, fontWeight: 600, color: 'var(--text)',
            letterSpacing: '-0.02em', transition: 'color 0.35s ease',
          }}>
            {t.author}
          </div>
          <div style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 13, color: 'var(--text-3)',
            marginTop: 2, transition: 'color 0.35s ease',
          }}>
            {t.role}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      padding: '120px 0',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}
        >
          <div>
            <p className="label" style={{ marginBottom: 16 }}>Testimonials</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
              Straight from the<br />people we serve.
            </h2>
          </div>

          {/* Trust indicators */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8,
          }}>
            <div style={{ display: 'flex', gap: 3 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F05A28" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-3)', letterSpacing: '-0.01em' }}>
              5.0 from our clients
            </p>
          </div>
        </motion.div>

        <div className="testi-grid">
          {testimonials.map((t, i) => <TestiCard key={t.author} t={t} index={i} />)}
        </div>
      </div>
    </section>
  )
}
