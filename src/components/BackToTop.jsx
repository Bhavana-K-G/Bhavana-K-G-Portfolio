import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { prefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button className={`iconbtn totop${show ? ' show' : ''}`} aria-label="Back to top" tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })}>
      <ArrowUp />
    </button>
  )
}
