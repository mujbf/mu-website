import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Cursor from './components/Cursor'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServicesDetail from './pages/ServicesDetail'
import Portfolio from './pages/Portfolio'
import PortfolioCase from './pages/PortfolioCase'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function AppInner({ dark, setDark }) {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Cursor />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicesDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioCase />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
  }, [])

  return (
    <BrowserRouter>
      <div
        data-theme={dark ? 'dark' : 'light'}
        style={{
          fontFamily: "'Geist', system-ui, sans-serif",
          backgroundColor: 'var(--bg)',
          color: 'var(--text)',
          minHeight: '100vh',
          transition: 'background-color 0.35s ease, color 0.35s ease',
        }}
      >
        <AppInner dark={dark} setDark={setDark} />
      </div>
    </BrowserRouter>
  )
}
