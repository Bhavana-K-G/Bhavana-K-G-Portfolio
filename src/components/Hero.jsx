import { FileDown, FolderGit2, Send } from 'lucide-react'
import { heroChips, profile } from '../data/portfolio'
import RouteMap from './RouteMap'
import photo from '../assets/profile.webp'

export default function Hero() {
  return (
    <div className="wrap hero" id="home">
      <div>
        <span className="status"><b />Open to Opportunities</span>
        {/* phone only: photo shown in the hero because the sidebar is hidden */}
        <div className="mprofile">
          <div className="avatar">
            <img src={photo} alt={profile.name} width="84" height="84" />
            <svg className="ring" viewBox="0 0 108 108" aria-hidden="true"><circle cx="54" cy="54" r="51" /></svg>
            <span className="live" />
          </div>
          <span className="status"><b />Open to Opportunities</span>
        </div>
        <h1>Hi, I’m {profile.name.replace(/ /g, '\u00a0')}.</h1>
        <p className="tagline role-line">{profile.role} at {profile.company}</p>
        <div className="role">
          {heroChips.map(({ label, icon: Icon }) => <span key={label} className="chip"><Icon />{label}</span>)}
        </div>
        <div className="actions">
          <a className="btn primary" href="#contact"><Send />Hire Me</a>
          <a className="btn" href="#projects"><FolderGit2 />View Projects</a>
          <a className="btn" href={profile.resume} download><FileDown />Resume</a>
        </div>
      </div>
      <RouteMap />
    </div>
  )
}
