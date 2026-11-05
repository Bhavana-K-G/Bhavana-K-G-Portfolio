import { Github, Linkedin, Mail, Moon, Radio, Sun } from 'lucide-react'
import { nav, profile } from '../data/portfolio'
import photo from '../assets/profile.webp'

export default function Sidebar({ active, onNavigate, theme }) {
  return (
    <aside id="side" aria-label="Sidebar">
      <div className="me">
        <div className="avatar">
          <img src={photo} alt={profile.name} width="96" height="96" />
          <svg className="ring" viewBox="0 0 108 108" aria-hidden="true"><circle cx="54" cy="54" r="51" /></svg>
          <span className="live" title="Open to opportunities" />
        </div>
        <h2>{profile.name}</h2>
        <p>{profile.role}<br />{profile.subtitle}</p>
      </div>

      <nav className="sidenav" aria-label="Sections">
        {nav.map(({ id, label, icon: Icon, badge }) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : undefined}
            aria-current={active === id ? 'true' : undefined} onClick={onNavigate}>
            <Icon />{label}{badge && <span className="badge">{badge}</span>}
          </a>
        ))}
      </nav>

      <div className="now-card">
        <div className="t"><Radio />Currently</div>
        <p>{profile.currently}</p>
      </div>

      <div className="sidefoot">
        <div className="soc">
          <a className="iconbtn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
          <a className="iconbtn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a className="iconbtn" href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        </div>
        <button className="iconbtn" onClick={theme.toggle} aria-label={theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
          {theme.isDark ? <Sun /> : <Moon />}
        </button>
      </div>
    </aside>
  )
}
