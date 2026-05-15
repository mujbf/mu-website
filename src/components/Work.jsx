import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS, CATEGORIES } from '../data/projects'

function ArrowRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

const CAT_LABEL = { Websites: 'Websites', Systems: 'Systems & Automation', Brand: 'Brand & Content' }

function WorkCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      style={{ cursor: 'pointer', breakInside: 'avoid', marginBottom: 20, display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/portfolio/${project.id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div
          className="video-scanlines"
          style={{ position: 'relative', height: project.imgH, borderRadius: 14, overflow: 'hidden', background: '#060608' }}
        >
          {/* Static poster */}
          <div style={{
            position: 'absolute', inset: 0,
            background: project.poster,
            transition: 'transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            opacity: hovered ? 0.3 : 1,
          }} />

          {/* Animated "video" layer */}
          <div style={{
            position: 'absolute', inset: 0,
            background: project.videoGrad,
            backgroundSize: '400% 400%',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.45s ease',
            animationName: hovered ? 'vidFlow' : 'none',
            animationDuration: `${project.vidSpeed}s`,
            animationTimingFunction: 'ease',
            animationIterationCount: 'infinite',
          }} />

          {/* Grain overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            opacity: hovered ? 0.06 : 0.03,
            mixBlendMode: 'screen',
            transition: 'opacity 0.4s ease', pointerEvents: 'none',
          }} />

          {/* Category badge */}
          <div style={{
            position: 'absolute', top: 14, left: 14,
            display: 'inline-flex', alignItems: 'center',
            padding: '4px 11px', borderRadius: 100,
            background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.14)',
            fontSize: 11, fontWeight: 500, letterSpacing: '0.04em',
            color: 'rgba(255,255,255,0.75)',
            opacity: hovered ? 0 : 1, transition: 'opacity 0.25s ease',
            whiteSpace: 'nowrap',
          }}>
            {CAT_LABEL[project.category] || project.category}
          </div>

          {/* Hover CTA */}
          <div style={{
            position: 'absolute', inset: 0,
            background: hovered
              ? 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 45%, transparent 70%)'
              : 'linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 40%)',
            transition: 'background 0.4s ease',
            display: 'flex', alignItems: 'flex-end', padding: '22px 22px',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 13, fontWeight: 500, color: '#fff', letterSpacing: '-0.01em',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.3s ease 0.08s, transform 0.3s ease 0.08s',
            }}>
              View case study <ArrowRightIcon />
            </div>
          </div>
        </div>
      </Link>

      <div style={{ padding: '14px 2px 0' }}>
        <h3 style={{
          fontSize: 14, fontWeight: 600, color: 'var(--text)',
          letterSpacing: '-0.02em', lineHeight: 1.4, marginBottom: 10,
          transition: 'color 0.35s ease',
        }}>
          {project.title}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {project.tags.map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
        </div>
      </div>
    </article>
  )
}

function FilterTab({ label, count, active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        fontSize: 13, fontWeight: 500, letterSpacing: '-0.02em',
        padding: '7px 15px', borderRadius: 100,
        border: active ? '1px solid transparent' : '1px solid var(--border-2)',
        background: active ? '#F05A28' : 'transparent',
        color: active ? '#fff' : 'var(--text-2)',
        cursor: 'pointer',
        transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => { if (!active) { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--bg-2)' } }}
      onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'transparent' } }}
    >
      {label}
      <span style={{ fontSize: 11, fontWeight: 400, color: active ? 'rgba(255,255,255,0.75)' : 'var(--text-3)', transition: 'color 0.2s ease' }}>
        {count}
      </span>
    </motion.button>
  )
}

/** @param {{ previewCount?: number, showFilters?: boolean }} props */
export default function Work({ previewCount, showFilters = true }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  const visible = previewCount ? filtered.slice(0, previewCount) : filtered

  return (
    <section id="work" style={{
      padding: '120px 0',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 40,
          }}
        >
          <div>
            <p className="label" style={{ marginBottom: 16 }}>Featured Work</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
              Work that moves<br />the needle.
            </h2>
          </div>
          <Link to="/portfolio" className="btn-ghost" style={{ flexShrink: 0 }}>
            {previewCount ? 'View all work' : 'Start a project'}
          </Link>
        </motion.div>

        {/* Filter Tabs */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex', alignItems: 'center',
              gap: 8, flexWrap: 'wrap', marginBottom: 40,
              paddingBottom: 32, borderBottom: '1px solid var(--border)',
              transition: 'border-color 0.35s ease',
            }}
          >
            {CATEGORIES.map(f => (
              <FilterTab
                key={f.value}
                label={f.label}
                count={f.count}
                active={activeFilter === f.value}
                onClick={() => setActiveFilter(f.value)}
              />
            ))}
          </motion.div>
        )}

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="work-masonry"
          >
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <WorkCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
