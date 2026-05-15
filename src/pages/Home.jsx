import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import ProblemFrame from '../components/ProblemFrame'
import Services from '../components/Services'
import Work from '../components/Work'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import HomeBlogPreview from '../components/HomeBlogPreview'
import HomeCtaBanner from '../components/HomeCtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <ProblemFrame />
      <Services />
      <Work previewCount={4} />
      <Stats />
      <Testimonials />
      <HomeBlogPreview />
      <FAQ previewCount={4} />
      <HomeCtaBanner />
    </>
  )
}
