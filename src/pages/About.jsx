import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import { TEAM, VALUES } from '../data/team'

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card"
      style={{ padding: '36px 32px' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: `linear-gradient(135deg, ${member.accent}22 0%, ${member.accent}44 100%)`,
          border: `1.5px solid ${member.accent}44`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 700, color: member.accent,
          flexShrink: 0, letterSpacing: '-0.02em',
        }}>
          {member.initials}
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>
            {member.name}
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 2 }}>
            {member.role}
          </div>
        </div>
      </div>
      <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65, letterSpacing: '-0.01em' }}>
        {member.bio}
      </p>
    </motion.div>
  )
}

function ValueCard({ value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: '40px 36px',
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      }}
      whileHover={{ y: -3 }}
    >
      <div style={{
        fontSize: 'clamp(40px, 5vw, 56px)',
        fontWeight: 900, letterSpacing: '-0.06em',
        color: 'var(--border-2)', lineHeight: 1,
        marginBottom: 20,
      }}>
        {value.number}
      </div>
      <h3 style={{
        fontSize: 18, fontWeight: 700, letterSpacing: '-0.03em',
        color: 'var(--text)', marginBottom: 12, lineHeight: 1.25,
      }}>
        {value.title}
      </h3>
      <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.65, letterSpacing: '-0.01em' }}>
        {value.body}
      </p>
    </motion.div>
  )
}

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title={<>Not just an agency.<br /><span style={{ color: 'var(--text-3)' }}>A growth system.</span></>}
        subtitle="Magic Unbound is a creative-tech studio based in Singapore. We help founders, operators, and growth teams build the brand, website, and operational infrastructure they actually need."
        breadcrumb={[{ label: 'About', href: '/about' }]}
        actions={
          <>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#F05A28', color: '#fff',
              fontSize: 14, fontWeight: 500, padding: '12px 24px',
              borderRadius: 100, textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#D94E20'}
              onMouseLeave={e => e.currentTarget.style.background = '#F05A28'}
            >
              Work with us
            </Link>
            <Link to="/portfolio" className="btn-ghost">See our work</Link>
          </>
        }
      />

      {/* Story */}
      <section style={{
        padding: '100px 0',
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.35s ease',
      }}>
        <div className="container">
          <div className="about-story-grid">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="label" style={{ marginBottom: 20 }}>Our Story</p>
              <h2 style={{
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 800, lineHeight: 1.08,
                letterSpacing: '-0.04em', color: 'var(--text)',
                marginBottom: 28,
              }}>
                Built because the<br />gap needed closing.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.75, letterSpacing: '-0.01em', marginBottom: 24 }}>
                Magic Unbound was founded in 2019 out of a frustration that is common in growing businesses: the people who design your brand do not understand your systems, the people who build your website do not understand your strategy, and the people who automate your workflows have never seen your customer journey.
              </p>
              <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.75, letterSpacing: '-0.01em', marginBottom: 24 }}>
                We started the studio to solve that. Brand, web, software, and automation — under one roof, built by one team that sees the whole picture from the start.
              </p>
              <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.75, letterSpacing: '-0.01em' }}>
                Based in Singapore with clients across Southeast Asia, South Asia, and the Middle East, we work with founders and operators who are serious about building something that lasts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{
        padding: '100px 0',
        background: 'var(--bg-2)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.35s ease',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 56 }}
          >
            <p className="label" style={{ marginBottom: 16 }}>What We Stand For</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              Four principles we<br />never compromise on.
            </h2>
          </motion.div>
          <div className="values-grid">
            {VALUES.map((v, i) => <ValueCard key={v.number} value={v} index={i} />)}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{
        padding: '100px 0',
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.35s ease',
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 56 }}
          >
            <p className="label" style={{ marginBottom: 16 }}>The Team</p>
            <h2 className="section-heading" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              Senior people.<br />No account managers.
            </h2>
          </motion.div>
          <div className="team-grid">
            {TEAM.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />

      {/* CTA */}
      <section style={{
        padding: '100px 0',
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        transition: 'background 0.35s ease',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="label" style={{ marginBottom: 20, display: 'block' }}>Ready?</p>
            <h2 style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 800, lineHeight: 1.04,
              letterSpacing: '-0.04em', color: 'var(--text)',
              marginBottom: 24,
            }}>
              We'd love to hear<br />about your project.
            </h2>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#F05A28', color: '#fff',
                fontSize: 14, fontWeight: 500, padding: '13px 26px',
                borderRadius: 100, textDecoration: 'none',
                transition: 'background 0.2s ease',
                boxShadow: '0 4px 20px rgba(240,90,40,0.3)',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#D94E20'}
                onMouseLeave={e => e.currentTarget.style.background = '#F05A28'}
              >
                Start a conversation
              </Link>
              <Link to="/portfolio" className="btn-ghost">View our work</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .about-story-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;
        }
        .values-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        .team-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
          .team-grid   { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .about-story-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 600px) {
          .values-grid { grid-template-columns: 1fr; }
          .team-grid   { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
