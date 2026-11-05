import { FileDown, FolderGit2, Send } from 'lucide-react'
import { heroChips, profile } from '../data/portfolio'
import RouteMap from './RouteMap'

export default function Hero() {
  return (
    <div className="wrap hero" id="home">
      <div>
        <span className="status"><b />Open to Opportunities</span>
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
