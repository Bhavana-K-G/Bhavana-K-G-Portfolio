import { Copyright, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <div className="wrap">
      <footer>
        <span><Copyright />{new Date().getFullYear()} {profile.name}</span>
        <span><MapPin />{profile.location}</span>
      </footer>
    </div>
  )
}
