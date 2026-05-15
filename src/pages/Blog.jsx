import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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

function FeaturedCard({ post }) {
  const accent = CAT_COLOR[post.category] || '#F05A28'
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ marginBottom: 56 }}
    >
      <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div className="card featured-card" style={{ overflow: 'hidden', transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '' }}
        >
          <div className="featured-inner">
            <div style={{ background: post.poster, position: 'relative', minHeight: 280 }}>
              <span style={{
                position: 'absolute', top: 14, left: 14,
                fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                color: '#fff', background: accent, padding: '3px 10px', borderRadius: 100,
              }}>Featured</span>
            </div>
            <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: accent }}>{post.category}</span>
                <h2 style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.25, margin: '12px 0 14px' }}>{post.title}</h2>
                <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.65 }}>{post.excerpt}</p>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 24 }}>
                <span style={{ fontSize: 12, color: 'var(--text-4)' }}>{formatDate(post.date)}</span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text-4)' }} />
                <span style={{ fontSize: 12, color: 'var(--text-4)' }}>{post.readTime} read</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

function BlogCard({ post, index }) {
  const accent = CAT_COLOR[post.category] || '#F05A28'
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div className="card" style={{ overflow: 'hidden', transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '' }}
        >
          <div style={{ height: 160, background: post.poster, position: 'relative' }}>
            <span style={{
              position: 'absolute', top: 14, left: 14,
              fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
              color: '#fff', background: accent, padding: '3px 10px', borderRadius: 100,
            }}>{post.category}</span>
          </div>
          <div style={{ padding: '24px 28px 28px' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
              <span style={{ fontSize: 12, color: 'var(--text-4)' }}>{formatDate(post.date)}</span>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text-4)', flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: 'var(--text-4)' }}>{post.readTime} read</span>
            </div>
            <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1.3, marginBottom: 10 }}>{post.title}</h3>
            <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65 }}>{post.excerpt}</p>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

const CATS = ['All', 'Operations', 'Websites', 'Brand', 'Automation']

export default function Blog() {
  const [active, setActive] = useState('All')
  const featured = POSTS.find(p => p.featured)
  const rest = active === 'All'
    ? POSTS.filter(p => !p.featured)
    : POSTS.filter(p => p.category === active)

  return (
    <>
      <PageHero
        label="The Studio Blog"
        title={<>Ideas worth<br /><span style={{ color: 'var(--text-3)' }}>reading.</span></>}
        subtitle="Practical thinking on brand, websites, operations, and automation from the Magic Unbound team."
        breadcrumb={[{ label: 'Blog', href: '/blog' }]}
      />

      <section style={{ padding: '80px 0 120px', background: 'var(--bg)', transition: 'background 0.35s ease' }}>
        <div className="container">
          {featured && active === 'All' && <FeaturedCard post={featured} />}

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40, paddingBottom: 32, borderBottom: '1px solid var(--border)', transition: 'border-color 0.35s ease' }}>
            {CATS.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontSize: 13, fontWeight: 500, letterSpacing: '-0.02em',
                  padding: '7px 15px', borderRadius: 100,
                  border: active === cat ? '1px solid transparent' : '1px solid var(--border-2)',
                  background: active === cat ? '#F05A28' : 'transparent',
                  color: active === cat ? '#fff' : 'var(--text-2)',
                  cursor: 'pointer', transition: 'background 0.2s, color 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="blog-grid"
            >
              {rest.map((post, i) => <BlogCard key={post.slug} post={post} index={i} />)}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <style>{`
        .blog-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        .featured-inner {
          display: grid; grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr; }
          .featured-inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
