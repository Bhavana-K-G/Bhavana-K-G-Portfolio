import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

/** Fixed bottom bar on phones with quick contact links. */
export default function MobileBar() {
  return (
    <nav className="mobilebar" aria-label="Contact links">
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin />LinkedIn</a>
      <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github />GitHub</a>
      <a href={`mailto:${profile.email}`}><Mail />Mail</a>
    </nav>
  )
}
