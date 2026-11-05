import { useCallback, useEffect, useRef, useState } from 'react'
import { nav } from './data/portfolio'
import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Experience from './components/Experience'
import Process from './components/Process'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Toast from './components/Toast'
import MobileBar from './components/MobileBar'

const sectionIds = nav.map((n) => n.id)

export default function App() {
  const theme = useTheme()
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const toastTimer = useRef()

  // drawer state lives on <body> so the CSS can slide the sidebar in on tablet/mobile
  useEffect(() => { document.body.classList.toggle('open', open) }, [open])
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toast = useCallback((msg) => {
    setToastMsg(msg)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToastMsg(''), 1800)
  }, [])

  return (
    <>
      <Topbar open={open} onToggle={() => setOpen((o) => !o)} theme={theme} />
      <div className="scrim" onClick={() => setOpen(false)} />
      <Sidebar active={active} onNavigate={() => setOpen(false)} theme={theme} />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Process />
        <Projects />
        <Skills />
        <Education />
        <Contact toast={toast} />
        <Footer />
      </main>
      <MobileBar />
      <BackToTop />
      <Toast message={toastMsg} />
    </>
  )
}
