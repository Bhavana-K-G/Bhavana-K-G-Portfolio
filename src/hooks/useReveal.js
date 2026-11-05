import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './usePrefersReducedMotion'

/** Adds a fade/slide-in when the element scrolls into view. Returns [ref, className]. */
export function useReveal() {
  const ref = useRef(null)
  const [shown, setShown] = useState(() => prefersReducedMotion())
  useEffect(() => {
    if (shown) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [shown])
  return [ref, `reveal${shown ? ' in' : ''}`]
}
