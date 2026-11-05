import { useEffect, useState } from 'react'

const media = () => window.matchMedia('(prefers-color-scheme: dark)')

/** Light/dark theme: follows the OS until the visitor picks one, then remembers it. */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') } catch { return null }
  })
  const [systemDark, setSystemDark] = useState(() => media().matches)

  useEffect(() => {
    const mq = media()
    const onChange = (e) => setSystemDark(e.matches)
    mq.addEventListener ? mq.addEventListener('change', onChange) : mq.addListener(onChange)
    return () => (mq.removeEventListener ? mq.removeEventListener('change', onChange) : mq.removeListener(onChange))
  }, [])

  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme
    else delete document.documentElement.dataset.theme
  }, [theme])

  const isDark = theme ? theme === 'dark' : systemDark
  const toggle = () => {
    const next = isDark ? 'light' : 'dark'
    setTheme(next)
    try { localStorage.setItem('theme', next) } catch { /* storage unavailable */ }
  }
  return { isDark, toggle }
}
