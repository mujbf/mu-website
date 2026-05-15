import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { POSTS } from '../data/blog'

const CAT_COLOR = {
  Operations: '#F05A28',
  Websites:   '#6366F1',
  Brand:      '#F59E0B',
  Automation: '#10B981',
}

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function BlogCard({ post, index }) {
  const accent = CAT_COLOR[post.category] || '#F05A28'
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div
          className="card"
          style={{
            overflow: 'hidden',
            transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '' }}
        >
          {/* Poster */}
          <div style={{
            height: 160,
            background: post.poster,
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.4) 100%)',
            }} />
            <span style={{
              position: 'absolute', top: 14, left: 14,
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: '#fff',
              background: accent,
              padding: '3px 10px', borderRadius: 100,
            }}>
              {post.category}
            </span>
          </div>

          {/* Body */}
          <div style={{ padding: '24px 28px 28px' }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--text-4)', letterSpacing: '-0.01em' }}>{formatDate(post.date)}</span>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text-4)', flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: 'var(--text-4)', letterSpacing: '-0.01em' }}>{post.readTime} read</span>
            </div>
            <h3 style={{
              fontSize: 17, fontWeight: 700,
              letterSpacing: '-0.03em', color: 'var(--text)',
              lineHeight: 1.3, marginBottom: 12,
              transition: 'color 0.35s ease',
            }}>
              {post.title}
            </h3>
            <p style={{
              fontSize: 14, color: 'var(--text-2)',
              lineHeight: 1.65, letterSpacing: '-0.01em',
              marginBottom: 20, transition: 'color 0.35s ease',
            }}>
              {post.excerpt}
            </p>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 13, fontWeight: 600, color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}>
              Read article <ArrowRight />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function HomeBlogPreview() {
  const preview = POSTS.slice(0, 3)

  return (
    <section style={{
      padding: '120px 0',
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      transition: 'background 0.35s ease',
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex', alignItems: 'flex-end',
            justifyContent: 'space-between', flexWrap: 'wrap',
            gap: 24, marginBottom: 56,
          }}
        >
          <div>
            <p className="label" style={{ marginBottom: 16 }}>From the Studio</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
              Ideas worth<br />reading.
            </h2>
          </div>
          <Link
            to="/blog"
            className="btn-ghost"
            style={{ flexShrink: 0 }}
          >
            View all articles
          </Link>
        </motion.div>

        <div className="blog-grid-home">
          {preview.map((post, i) => <BlogCard key={post.slug} post={post} index={i} />)}
        </div>
      </div>

      <style>{`
        .blog-grid-home {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .blog-grid-home { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .blog-grid-home { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
