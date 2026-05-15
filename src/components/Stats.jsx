import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { raw: 50,  suffix: '+', label: 'Projects Delivered',  prefix: '' },
  { raw: 3,   suffix: '+', label: 'Industries Served',   prefix: '' },
  { raw: 100, suffix: '%', label: 'Client Satisfaction', prefix: '' },
  { raw: 2019,suffix: '',  label: 'Founded',             prefix: '' },
]

function CountUp({ target, suffix, prefix, duration = 1600 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section style={{
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-2)',
      transition: 'background 0.35s ease',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative large number bg */}
      <div style={{
        position: 'absolute',
        right: '-2%',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: 'clamp(120px, 20vw, 220px)',
        fontWeight: 900,
        letterSpacing: '-0.06em',
        color: 'var(--border)',
        pointerEvents: 'none',
        userSelect: 'none',
        lineHeight: 1,
        opacity: 0.6,
      }}>
        50+
      </div>

      <div className="container">
        <div className="stats-bar">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '52px 32px',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
                transition: 'border-color 0.35s ease',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 800,
                color: 'var(--text)',
                letterSpacing: '-0.05em',
                lineHeight: 1,
                marginBottom: 10,
                transition: 'color 0.35s ease',
              }}>
                <CountUp
                  target={s.raw}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  duration={s.raw >= 1000 ? 2000 : 1400}
                />
              </div>
              <div style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: 'var(--text-3)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'color 0.35s ease',
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
