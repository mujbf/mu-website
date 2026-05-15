import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { POSTS } from '../data/blog'

const CAT_COLOR = {
  Operations: '#F05A28',
  Websites:   '#6366F1',
  Brand:      '#F59E0B',
  Automation: '#10B981',
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const accent = CAT_COLOR[post.category] || '#F05A28'
  const related = POSTS.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        label={post.category}
        title={post.title}
        subtitle={`${formatDate(post.date)} · ${post.readTime} read`}
        breadcrumb={[
          { label: 'Blog', href: '/blog' },
          { label: post.category, href: '/blog' },
        ]}
      />

      <section style={{ padding: '80px 0 100px', background: 'var(--bg)', borderBottom: '1px solid var(--border)', transition: 'background 0.35s ease' }}>
        <div className="container">
          <div className="post-layout">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ height: 300, background: post.poster, borderRadius: 16, marginBottom: 48, position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%)',
                }} />
              </div>

              {post.body.map((block, i) => {
                if (block.type === 'h2') {
                  return (
                    <h2 key={i} style={{
                      fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em',
                      color: 'var(--text)', lineHeight: 1.25, margin: '48px 0 18px',
                    }}>
                      {block.text}
                    </h2>
                  )
                }
                return (
                  <p key={i} style={{
                    fontSize: 17, color: 'var(--text-2)',
                    lineHeight: 1.75, letterSpacing: '-0.01em', marginBottom: 24,
                  }}>
                    {block.text}
                  </p>
                )
              })}

              <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid var(--border)', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <Link to="/blog" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 14, color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/>
                  </svg>
                  Back to all articles
                </Link>
              </div>
            </motion.article>

            <aside>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card"
                style={{ padding: '28px 24px', position: 'sticky', top: 100, marginBottom: 20 }}
              >
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 16 }}>About this article</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div>
                    <p style={{ fontSize: 12, color: 'var(--text-4)', marginBottom: 4 }}>Category</p>
                    <span style={{ fontSize: 13, fontWeight: 600, color: accent }}>{post.category}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: 'var(--text-4)', marginBottom: 4 }}>Published</p>
                    <p style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{formatDate(post.date)}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 12, color: 'var(--text-4)', marginBottom: 4 }}>Read time</p>
                    <p style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{post.readTime}</p>
                  </div>
                </div>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                  <Link to="/contact" style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: '#F05A28', color: '#fff',
                    fontSize: 13, fontWeight: 500, padding: '11px 16px',
                    borderRadius: 100, textDecoration: 'none', transition: 'background 0.2s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = '#D94E20'}
                    onMouseLeave={e => e.currentTarget.style.background = '#F05A28'}
                  >
                    Work with us
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--text-4)', marginBottom: 14 }}>More articles</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {related.map(p => (
                    <Link key={p.slug} to={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                      <div className="card" style={{ padding: '16px 18px', transition: 'transform 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
                      >
                        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.35, marginBottom: 5 }}>{p.title}</p>
                        <p style={{ fontSize: 11, color: 'var(--text-4)' }}>{p.category} · {p.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .post-layout {
          display: grid; grid-template-columns: 1fr 300px; gap: 64px; align-items: start;
        }
        @media (max-width: 1024px) {
          .post-layout { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
