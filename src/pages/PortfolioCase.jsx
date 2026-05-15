import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { PROJECTS } from '../data/projects'

export default function PortfolioCase() {
  const { id } = useParams()
  const project = PROJECTS.find(p => p.id === id)

  if (!project) return <Navigate to="/portfolio" replace />

  const others = PROJECTS.filter(p => p.id !== id).slice(0, 3)

  return (
    <>
      <PageHero
        label={project.client}
        title={project.title}
        subtitle={project.tags.join(' · ')}
        breadcrumb={[
          { label: 'Portfolio', href: '/portfolio' },
          { label: project.client, href: `/portfolio/${project.id}` },
        ]}
      />

      {/* Visual banner */}
      <div style={{ height: 380, background: project.videoGrad, position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.06, mixBlendMode: 'screen',
        }} />
        <div style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {[project.category, project.duration, project.year].map(tag => (
            <span key={tag} style={{
              padding: '5px 14px', borderRadius: 100, fontSize: 12,
              background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)',
              fontWeight: 500,
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <section style={{ padding: '80px 0 100px', background: 'var(--bg)', borderBottom: '1px solid var(--border)', transition: 'background 0.35s ease' }}>
        <div className="container">
          <div className="case-layout">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginBottom: 56 }}
              >
                <p className="label" style={{ marginBottom: 16 }}>The Challenge</p>
                <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.75, letterSpacing: '-0.01em' }}>{project.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginBottom: 56 }}
              >
                <p className="label" style={{ marginBottom: 16 }}>Our Approach</p>
                <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.75, letterSpacing: '-0.01em' }}>{project.approach}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="label" style={{ marginBottom: 20 }}>Results</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {project.results.map(r => (
                    <li key={r} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 16, color: 'var(--text)', lineHeight: 1.5 }}>
                      <span style={{ color: '#F05A28', fontSize: 18, lineHeight: 1.3, flexShrink: 0 }}>→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="card"
                style={{ padding: '32px 28px', position: 'sticky', top: 100 }}
              >
                {[
                  { label: 'Client', value: project.client },
                  { label: 'Category', value: project.category },
                  { label: 'Year', value: project.year },
                  { label: 'Duration', value: project.duration },
                ].map(item => (
                  <div key={item.label} style={{ marginBottom: 24 }}>
                    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 6 }}>{item.label}</p>
                    <p style={{ fontSize: 15, color: 'var(--text)', fontWeight: 500 }}>{item.value}</p>
                  </div>
                ))}

                <div style={{ paddingTop: 20, borderTop: '1px solid var(--border)', marginBottom: 24 }}>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 12 }}>Services Used</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {project.services.map(s => (
                      <span key={s} className="tag" style={{ fontSize: 12 }}>{s}</span>
                    ))}
                  </div>
                </div>

                <Link to="/contact" style={{
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  background: '#F05A28', color: '#fff',
                  fontSize: 14, fontWeight: 500, padding: '12px 20px',
                  borderRadius: 100, textDecoration: 'none', transition: 'background 0.2s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#D94E20'}
                  onMouseLeave={e => e.currentTarget.style.background = '#F05A28'}
                >
                  Start a similar project
                </Link>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      {/* More work */}
      <section style={{ padding: '80px 0', background: 'var(--bg-2)', transition: 'background 0.35s ease' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 36 }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)' }}>More work</h2>
            <Link to="/portfolio" className="btn-ghost">View all</Link>
          </div>
          <div className="more-work-grid">
            {others.map(p => (
              <Link key={p.id} to={`/portfolio/${p.id}`} style={{ textDecoration: 'none' }}>
                <div
                  style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 14, transition: 'transform 0.3s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ height: 160, background: p.poster }} />
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.4, marginBottom: 6 }}>{p.title}</h3>
                <span style={{ fontSize: 12, color: 'var(--text-4)' }}>{p.client} · {p.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .case-layout {
          display: grid; grid-template-columns: 1fr 320px; gap: 80px; align-items: start;
        }
        .more-work-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        @media (max-width: 1024px) {
          .case-layout { grid-template-columns: 1fr; }
          .more-work-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .more-work-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
