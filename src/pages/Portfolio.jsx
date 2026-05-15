import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Work from '../components/Work'
import Testimonials from '../components/Testimonials'

export default function Portfolio() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title={<>Work that moves<br /><span style={{ color: 'var(--text-3)' }}>the needle.</span></>}
        subtitle="A selection of brand, web, and systems projects from our studio. Every case study represents real results for real businesses."
        breadcrumb={[{ label: 'Portfolio', href: '/portfolio' }]}
        actions={
          <>
            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#F05A28', color: '#fff',
              fontSize: 14, fontWeight: 500, padding: '12px 24px',
              borderRadius: 100, textDecoration: 'none', transition: 'background 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#D94E20'}
              onMouseLeave={e => e.currentTarget.style.background = '#F05A28'}
            >
              Start a project
            </Link>
            <Link to="/about" className="btn-ghost">About us</Link>
          </>
        }
      />
      <Work showFilters={true} />
      <Testimonials />
    </>
  )
}
