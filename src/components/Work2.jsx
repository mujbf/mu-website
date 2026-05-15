import { useState } from 'react'

/* ─── Data ──────────────────────────────────────────────── */
const FILTERS = [
  { label: 'All Work',            value: 'All',                 count: 8 },
  { label: 'Websites',            value: 'Websites',            count: 3 },
  { label: 'Systems & Automation',value: 'Systems',             count: 3 },
  { label: 'Brand & Content',     value: 'Brand',               count: 2 },
]

// imgH controls the image thumbnail height — varying heights create the masonry feel
const PROJECTS = [
  {
    id: 1,
    title: 'Turning a cluttered law firm into a trusted digital presence.',
    category: 'Websites',
    tags: ['Web Design', 'Development', 'Copywriting'],
    imgH: 420,
    poster:    'linear-gradient(145deg, #0a0818 0%, #1c1050 55%, #0f0c29 100%)',
    videoGrad: 'linear-gradient(225deg, #180e50 0%, #3c2090 35%, #1a1468 65%, #0c0838 100%)',
    vidSpeed: 7,
  },
  {
    id: 2,
    title: 'Replacing spreadsheets and WhatsApp chaos with a real operations system.',
    category: 'Systems',
    tags: ['Custom ERP', 'Workflow Automation', 'Integrations'],
    imgH: 300,
    poster:    'linear-gradient(145deg, #041008 0%, #0a2414 55%, #061810 100%)',
    videoGrad: 'linear-gradient(225deg, #083018 0%, #18683a 35%, #0e4828 65%, #042010 100%)',
    vidSpeed: 8,
  },
  {
    id: 3,
    title: 'A visual language a hospitality brand could own forever.',
    category: 'Brand',
    tags: ['Brand Identity', 'Brand Strategy', 'Graphic Design'],
    imgH: 360,
    poster:    'linear-gradient(145deg, #140602 0%, #341408 55%, #200c04 100%)',
    videoGrad: 'linear-gradient(225deg, #2e0e06 0%, #6e2a14 35%, #4c1c0a 65%, #200804 100%)',
    vidSpeed: 6,
  },
  {
    id: 4,
    title: 'Helping a SaaS team go from zero to launched in 8 weeks.',
    category: 'Websites',
    tags: ['Web App', 'UX Design', 'Development'],
    imgH: 280,
    poster:    'linear-gradient(145deg, #06081a 0%, #101838 55%, #0c1030 100%)',
    videoGrad: 'linear-gradient(225deg, #0e1c4e 0%, #1e3a90 35%, #122068 65%, #081228 100%)',
    vidSpeed: 7,
  },
  {
    id: 5,
    title: 'An AI assistant that reduced manual follow-up work by 70%.',
    category: 'Systems',
    tags: ['AI Automation', 'Workflow', 'Integration'],
    imgH: 460,
    poster:    'linear-gradient(145deg, #040e06 0%, #0a2210 55%, #061808 100%)',
    videoGrad: 'linear-gradient(225deg, #083014 0%, #145c2a 35%, #0c4020 65%, #062010 100%)',
    vidSpeed: 9,
  },
  {
    id: 6,
    title: 'Giving a fintech startup a brand that could compete with the incumbents.',
    category: 'Brand',
    tags: ['Brand Identity', 'UI/UX', 'Messaging'],
    imgH: 320,
    poster:    'linear-gradient(145deg, #0e0414 0%, #200c36 55%, #160828 100%)',
    videoGrad: 'linear-gradient(225deg, #200830 0%, #4a1268 35%, #2e0c4c 65%, #160424 100%)',
    vidSpeed: 6,
  },
  {
    id: 7,
    title: 'E-commerce redesign that lifted conversions by 40%.',
    category: 'Websites',
    tags: ['Web Design', 'UX', 'Development'],
    imgH: 380,
    poster:    'linear-gradient(145deg, #080a10 0%, #10141e 55%, #0c1018 100%)',
    videoGrad: 'linear-gradient(225deg, #0c1228 0%, #182448 35%, #101c3c 65%, #080e20 100%)',
    vidSpeed: 8,
  },
  {
    id: 8,
    title: 'A custom client portal that eliminated 20 hours of admin per week.',
    category: 'Systems',
    tags: ['Client Portal', 'Custom App', 'Automation'],
    imgH: 240,
    poster:    'linear-gradient(145deg, #080610 0%, #141028 55%, #100c20 100%)',
    videoGrad: 'linear-gradient(225deg, #120e30 0%, #2a1c60 35%, #1a1040 65%, #0c0820 100%)',
    vidSpeed: 7,
  },
]

/* ─── Icons ─────────────────────────────────────────────── */
function ArrowRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

/* ─── Category → display label ──────────────────────────── */
const CAT_LABEL = {
  Websites: 'Websites',
  Systems:  'Systems & Automation',
  Brand:    'Brand & Content',
}

/* ─── Single Card ───────────────────────────────────────── */
function WorkCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      style={{
        cursor: 'pointer',
        breakInside: 'avoid',
        marginBottom: 20,
        display: 'block',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className="video-scanlines"
        style={{
          position: 'relative',
          height: project.imgH,
          borderRadius: 14,
          overflow: 'hidden',
          background: '#060608',
        }}
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
          animationFillMode: 'both',
        }} />

        {/* Grain overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: hovered ? 0.06 : 0.03,
          mixBlendMode: 'screen',
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
        }} />

        {/* Category badge */}
        <div style={{
          position: 'absolute', top: 14, left: 14,
          display: 'inline-flex', alignItems: 'center',
          padding: '4px 11px',
          borderRadius: 100,
          background: 'rgba(255,255,255,0.10)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.14)',
          fontSize: 11, fontWeight: 500,
          letterSpacing: '0.04em',
          color: 'rgba(255,255,255,0.75)',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.25s ease',
          whiteSpace: 'nowrap',
        }}>
          {CAT_LABEL[project.category] || project.category}
        </div>

        {/* Bottom gradient + CTA */}
        <div style={{
          position: 'absolute', inset: 0,
          background: hovered
            ? 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 45%, transparent 70%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 40%)',
          transition: 'background 0.4s ease',
          display: 'flex', alignItems: 'flex-end',
          padding: '22px 22px',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: 13, fontWeight: 500,
            color: '#fff', letterSpacing: '-0.01em',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.3s ease 0.08s, transform 0.3s ease 0.08s',
          }}>
            View case study
            <ArrowRightIcon />
          </div>
        </div>
      </div>

      {/* Text below */}
      <div style={{ padding: '14px 2px 0' }}>
        <h3 style={{
          fontSize: 14,
          fontWeight: 600,
          color: 'var(--text)',
          letterSpacing: '-0.02em',
          lineHeight: 1.4,
          marginBottom: 10,
          transition: 'color 0.35s ease',
        }}>
          {project.title}
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {project.tags.map(t => (
            <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

/* ─── Filter Tab ────────────────────────────────────────── */
function FilterTab({ label, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        fontSize: 13, fontWeight: 500,
        letterSpacing: '-0.02em',
        padding: '7px 15px',
        borderRadius: 100,
        border: active ? '1px solid transparent' : '1px solid var(--border-2)',
        background: active ? '#F05A28' : 'transparent',
        color: active ? '#fff' : 'var(--text-2)',
        cursor: 'pointer',
        transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => {
        if (!active) { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'var(--bg-2)' }
      }}
      onMouseLeave={e => {
        if (!active) { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.background = 'transparent' }
      }}
    >
      {label}
      <span style={{
        fontSize: 11, fontWeight: 400,
        color: active ? 'rgba(255,255,255,0.75)' : 'var(--text-3)',
        transition: 'color 0.2s ease',
      }}>
        {count}
      </span>
    </button>
  )
}

/* ─── Section ───────────────────────────────────────────── */
export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [fading, setFading] = useState(false)

  const visible = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  const handleFilter = (value) => {
    if (value === activeFilter) return
    setFading(true)
    setTimeout(() => { setActiveFilter(value); setFading(false) }, 180)
  }

  return (
    <section id="work" style={{
      padding: '120px 0',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 24,
          marginBottom: 40,
        }}>
          <div>
            <p className="label" style={{ marginBottom: 16 }}>Featured Work</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
              Work that moves<br />the needle.
            </h2>
          </div>
          <a href="#contact" className="btn-ghost" style={{ flexShrink: 0 }}>
            Start a project
          </a>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: 8, flexWrap: 'wrap',
          marginBottom: 40,
          paddingBottom: 32,
          borderBottom: '1px solid var(--border)',
          transition: 'border-color 0.35s ease',
        }}>
          {FILTERS.map(f => (
            <FilterTab
              key={f.value}
              label={f.label}
              count={f.count}
              active={activeFilter === f.value}
              onClick={() => handleFilter(f.value)}
            />
          ))}
        </div>

        {/* Masonry grid */}
        <div
          className="work-masonry"
          style={{
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.18s ease',
          }}
        >
          {visible.map(project => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
