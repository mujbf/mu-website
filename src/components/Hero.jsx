import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

/* Magnetic CTA button — moves slightly toward cursor */
function MagneticBtn({ href, children, style }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18 })
  const sy = useSpring(y, { stiffness: 200, damping: 18 })

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ ...style, x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  )
}

/* Stagger container + item presets */
const heroStagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  /* ── Mouse parallax ── */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smX = useSpring(mouseX, { stiffness: 40, damping: 18 })
  const smY = useSpring(mouseY, { stiffness: 40, damping: 18 })
  const dotX = useTransform(smX, v => v * -0.18)
  const dotY = useTransform(smY, v => v * -0.18)
  const glowX = useTransform(smX, v => `calc(-5% + ${v * 0.04}px)`)
  const glowY = useTransform(smY, v => `calc(-10% + ${v * 0.04}px)`)

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }
  const onMouseLeave = () => { mouseX.set(0); mouseY.set(0) }

  return (
    <section
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 40px 100px',
        overflow: 'hidden',
      }}
    >
      {/* Parallax dot-grid */}
      <motion.div
        style={{
          position: 'absolute',
          inset: -40,
          pointerEvents: 'none',
          backgroundImage: 'radial-gradient(var(--border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.55,
          x: dotX,
          y: dotY,
        }}
      />

      {/* Ambient glow — follows mouse softly */}
      <motion.div
        style={{
          position: 'absolute',
          top: glowY,
          right: glowX,
          width: '55vw',
          height: '65vh',
          background: 'radial-gradient(ellipse at center, rgba(240,90,40,0.09) 0%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      {/* Secondary glow bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '35vw',
        height: '40vh',
        background: 'radial-gradient(ellipse at center, rgba(240,90,40,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 200,
        background: 'linear-gradient(to bottom, transparent, var(--bg))',
        pointerEvents: 'none',
      }} />

      <motion.div
        variants={heroStagger}
        initial="hidden"
        animate="show"
        style={{ maxWidth: 1260, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}
      >
        {/* Eyebrow */}
        <motion.div variants={heroItem} style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 44,
          padding: '6px 14px 6px 8px',
          borderRadius: 100,
          border: '1px solid var(--border)',
          background: 'var(--bg-2)',
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.07em', textTransform: 'uppercase',
            color: '#fff',
            background: '#F05A28',
            padding: '3px 9px', borderRadius: 100,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', display: 'inline-block' }} />
            Creative-Tech Studio
          </span>
          <span style={{
            fontSize: 12, fontWeight: 500,
            letterSpacing: '0.04em', textTransform: 'uppercase',
            color: 'var(--text-4)',
          }}>
            Brand · Web · Systems · Automation
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={heroItem}
          style={{
            fontSize: 'clamp(48px, 8vw, 108px)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.05em',
            color: 'var(--text)',
            maxWidth: 980,
            marginBottom: 40,
          }}
        >
          We build brands,{' '}
          <span style={{ color: 'var(--text-3)' }}>websites,</span>
          <br />
          and business{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            systems.
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #F05A28, transparent)',
                borderRadius: 2,
                transformOrigin: 'left',
              }}
            />
          </span>
        </motion.h1>

        {/* Sub + CTAs row */}
        <motion.div
          variants={heroItem}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 48,
            flexWrap: 'wrap',
          }}
        >
          <p style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            color: 'var(--text-2)',
            lineHeight: 1.65,
            fontWeight: 400,
            maxWidth: 480,
            letterSpacing: '-0.01em',
          }}>
            Magic Unbound is a creative-tech studio helping ambitious businesses sharpen their brand, launch better websites, automate manual work, and build custom software that actually gets used.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0, alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <MagneticBtn
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#F05A28', color: '#fff',
                  fontSize: 14, fontWeight: 500,
                  letterSpacing: '-0.01em',
                  padding: '13px 24px',
                  borderRadius: 100,
                  textDecoration: 'none',
                  boxShadow: '0 4px 24px rgba(240,90,40,0.38)',
                  border: 'none',
                }}
              >
                Fix My Operations
                <ArrowRightIcon />
              </MagneticBtn>
              <MagneticBtn
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'transparent', color: 'var(--text-2)',
                  fontSize: 14, fontWeight: 500,
                  letterSpacing: '-0.01em',
                  padding: '13px 24px',
                  borderRadius: 100,
                  textDecoration: 'none',
                  border: '1px solid var(--border-2)',
                }}
              >
                Build My Website
              </MagneticBtn>
            </div>
            <a
              href="#work"
              style={{
                fontSize: 13, color: 'var(--text-3)',
                textDecoration: 'none', letterSpacing: '-0.01em',
                transition: 'color 0.2s',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
            >
              See Our Work ↓
            </a>
          </div>
        </motion.div>

        {/* Bottom rule */}
        <motion.div
          variants={heroItem}
          style={{
            display: 'flex', alignItems: 'center', gap: 24,
            marginTop: 88,
          }}
        >
          <hr className="divider" style={{ flex: 1 }} />
          {/* Live metrics strip */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 24,
            flexShrink: 0,
          }}>
            {[['50+', 'Projects'], ['100%', 'Satisfaction'], ['Since 2019', '']].map(([val, label]) => (
              <div key={val} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em' }}>{val}</span>
                {label && <span style={{ fontSize: 11, color: 'var(--text-4)', letterSpacing: '0.04em' }}>{label}</span>}
              </div>
            ))}
          </div>
          <a
            href="#clients"
            aria-label="Scroll down"
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 12, fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: 'var(--text-4)', textDecoration: 'none',
              transition: 'color 0.2s', flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-3)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-4)'}
          >
            Scroll
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <polyline points="19 12 12 19 5 12"/>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
