import { Menu, Navigation, X } from 'lucide-react'

export default function Topbar({ open, onToggle }) {
  return (
    <div className="topbar">
      <a className="mark" href="#home"><Navigation />Bhavana</a>
      <button className="iconbtn" onClick={onToggle} aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open} aria-controls="side">
        {open ? <X /> : <Menu />}
      </button>
    </div>
  )
}
