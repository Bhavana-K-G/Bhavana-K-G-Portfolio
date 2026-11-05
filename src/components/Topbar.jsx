import { Menu, Moon, Navigation, Sun, X } from 'lucide-react'

/** Top bar for tablet/phone. Tablet: opens the sidebar drawer. Phone: theme toggle only (no sidebar). */
export default function Topbar({ open, onToggle, theme }) {
  return (
    <div className="topbar">
      <a className="mark" href="#home"><Navigation />Bhavana</a>
      <button className="iconbtn theme-m" onClick={theme.toggle}
        aria-label={theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
        {theme.isDark ? <Sun /> : <Moon />}
      </button>
      <button className="iconbtn menu-btn" onClick={onToggle} aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open} aria-controls="side">
        {open ? <X /> : <Menu />}
      </button>
    </div>
  )
}
