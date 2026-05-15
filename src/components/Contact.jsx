import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function MapIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F05A28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  )
}

const contactItems = [
  { Icon: MailIcon,  label: 'Email',  value: 'hello@magicunbound.co', href: 'mailto:hello@magicunbound.co' },
  { Icon: PhoneIcon, label: 'Phone',  value: '+94 77 167 4204',        href: 'tel:+94771674204' },
  { Icon: MapIcon,   label: 'Office', value: '3 Shenton Way, Singapore 068805', href: null },
]

const PROJECT_TYPES = [
  'Brand Identity & Strategy',
  'Website Design & Development',
  'ERP / Operations System',
  'AI & Workflow Automation',
  'Full-Stack Partnership',
  'Other',
]

function ContactInfoCard({ item }) {
  const { Icon, label, value, href } = item
  const inner = (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '18px 20px',
        background: 'var(--bg-2)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        transition: 'border-color 0.2s ease, background 0.2s ease',
      }}
      onMouseEnter={href ? e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.background = 'var(--bg-3)' } : undefined}
      onMouseLeave={href ? e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-2)' } : undefined}
    >
      <div style={{
        width: 38, height: 38, borderRadius: 10,
        background: 'var(--bg-3)', border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--text-3)', flexShrink: 0,
      }}>
        <Icon />
      </div>
      <div>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 2 }}>
          {label}
        </div>
        <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500, letterSpacing: '-0.01em' }}>
          {value}
        </div>
      </div>
    </div>
  )
  return href ? <a href={href} style={{ textDecoration: 'none' }}>{inner}</a> : <div>{inner}</div>
}

function SuccessState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center',
        padding: '60px 40px',
        background: 'var(--bg-2)', border: '1px solid var(--border)',
        borderRadius: 20, gap: 20,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 14 }}
      >
        <CheckCircleIcon />
      </motion.div>
      <div>
        <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 8 }}>
          Message received!
        </h3>
        <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.6, maxWidth: 300 }}>
          We'll review your enquiry and get back to you within 48 hours.
        </p>
      </div>
    </motion.div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email required'
    if (!form.type) errs.type = 'Select a project type'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    // Simulate network request
    await new Promise(r => setTimeout(r, 1200))
    // Open mailto as fallback
    const subject = encodeURIComponent(`[Magic Unbound] ${form.type} — ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nProject: ${form.type}\n\n${form.message}`)
    window.open(`mailto:hello@magicunbound.co?subject=${subject}&body=${body}`, '_blank')
    setLoading(false)
    setSubmitted(true)
  }

  const inputStyle = (field) => ({
    width: '100%',
    background: errors[field] ? 'rgba(240,90,40,0.04)' : 'var(--bg-2)',
    border: `1px solid ${errors[field] ? 'rgba(240,90,40,0.5)' : 'var(--border)'}`,
    borderRadius: 10,
    padding: '13px 16px',
    fontFamily: "'Geist', system-ui, sans-serif",
    fontSize: 15,
    color: 'var(--text)',
    outline: 'none',
    transition: 'border-color 0.2s ease, background 0.2s ease',
    boxSizing: 'border-box',
  })

  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 500,
    color: 'var(--text-2)',
    marginBottom: 6,
    letterSpacing: '-0.01em',
  }

  const errorStyle = {
    fontSize: 12,
    color: '#F05A28',
    marginTop: 4,
    letterSpacing: '-0.01em',
  }

  return (
    <section id="contact" style={{
      padding: '120px 0',
      background: 'var(--bg)',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}
          className="contact-layout"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label" style={{ marginBottom: 24 }}>Get In Touch</p>
            <h2 style={{
              fontSize: 'clamp(40px, 5.5vw, 64px)',
              fontWeight: 800, lineHeight: 1.04,
              letterSpacing: '-0.04em', color: 'var(--text)',
              marginBottom: 20, transition: 'color 0.35s ease',
            }}>
              Let's build<br />something great.
            </h2>
            <p style={{
              fontSize: 16, color: 'var(--text-2)',
              lineHeight: 1.7, letterSpacing: '-0.01em',
              maxWidth: 380, marginBottom: 36,
              transition: 'color 0.35s ease',
            }}>
              Whether you need a new brand identity, a high-performance website, or an AI workflow that saves your team hours every week — we're ready.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
              {contactItems.map(item => <ContactInfoCard key={item.label} item={item} />)}
            </div>

            {/* Direct email CTA */}
            <a
              href="mailto:hello@magicunbound.co"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#F05A28', color: '#fff',
                fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em',
                padding: '11px 22px', borderRadius: 100, textDecoration: 'none',
                transition: 'background 0.2s ease, transform 0.15s ease',
                boxShadow: '0 4px 20px rgba(240,90,40,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#D94E20'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#F05A28'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Email us directly
              <ArrowRightIcon />
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <SuccessState key="success" />
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  style={{
                    background: 'var(--bg-2)', border: '1px solid var(--border)',
                    borderRadius: 20, padding: '40px',
                    display: 'flex', flexDirection: 'column', gap: 20,
                    transition: 'background 0.35s ease, border-color 0.35s ease',
                  }}
                  noValidate
                >
                  <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: 4 }}>
                    Send us a message
                  </h3>

                  {/* Name + Company row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-row">
                    <div>
                      <label style={labelStyle} htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Alex Johnson"
                        value={form.name}
                        onChange={set('name')}
                        style={inputStyle('name')}
                        onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = 'var(--bg)' }}
                        onBlur={e => { e.target.style.borderColor = errors.name ? 'rgba(240,90,40,0.5)' : 'var(--border)'; e.target.style.background = 'var(--bg-2)' }}
                      />
                      {errors.name && <p style={errorStyle}>{errors.name}</p>}
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="contact-company">Company</label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={set('company')}
                        style={inputStyle('company')}
                        onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = 'var(--bg)' }}
                        onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'var(--bg-2)' }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle} htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="alex@acmecorp.com"
                      value={form.email}
                      onChange={set('email')}
                      style={inputStyle('email')}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = 'var(--bg)' }}
                      onBlur={e => { e.target.style.borderColor = errors.email ? 'rgba(240,90,40,0.5)' : 'var(--border)'; e.target.style.background = 'var(--bg-2)' }}
                    />
                    {errors.email && <p style={errorStyle}>{errors.email}</p>}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label style={labelStyle} htmlFor="contact-type">Project Type *</label>
                    <select
                      id="contact-type"
                      value={form.type}
                      onChange={set('type')}
                      style={{ ...inputStyle('type'), ...{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 40, appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer' } }}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = 'var(--bg)' }}
                      onBlur={e => { e.target.style.borderColor = errors.type ? 'rgba(240,90,40,0.5)' : 'var(--border)'; e.target.style.background = 'var(--bg-2)' }}
                    >
                      <option value="">Select a project type…</option>
                      {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.type && <p style={errorStyle}>{errors.type}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle} htmlFor="contact-message">Message *</label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline…"
                      value={form.message}
                      onChange={set('message')}
                      style={{ ...inputStyle('message'), resize: 'none' }}
                      onFocus={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.background = 'var(--bg)' }}
                      onBlur={e => { e.target.style.borderColor = errors.message ? 'rgba(240,90,40,0.5)' : 'var(--border)'; e.target.style.background = 'var(--bg-2)' }}
                    />
                    {errors.message && <p style={errorStyle}>{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                      background: loading ? 'rgba(240,90,40,0.7)' : '#F05A28',
                      color: '#fff', border: 'none',
                      fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em',
                      padding: '14px 28px', borderRadius: 100, cursor: loading ? 'not-allowed' : 'pointer',
                      transition: 'background 0.2s ease',
                      boxShadow: '0 4px 20px rgba(240,90,40,0.3)',
                    }}
                  >
                    {loading ? (
                      <>
                        <svg style={{ animation: 'spin 1s linear infinite' }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRightIcon />
                      </>
                    )}
                  </motion.button>

                  <p style={{ fontSize: 12, color: 'var(--text-4)', textAlign: 'center', letterSpacing: '-0.01em' }}>
                    We respond within 48 hours. No spam, ever.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  )
}
