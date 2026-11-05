import { Github, Linkedin, Mail, MessageSquare, Phone, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
import SectionHead from './SectionHead'

export default function Contact({ toast }) {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      toast('Email copied')
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`)
    const body = encodeURIComponent(data.get('msg'))
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    toast('Opening your email app')
  }

  return (
    <section id="contact" className="contact"><div className="wrap">
      <SectionHead icon={Mail} title="Contact" />
      <h2 className="big">Let’s build something that moves.</h2>
      <div className="grid2">
        <div className="links">
          <button type="button" className="card" onClick={copyEmail}>
            <span className="bigico blue"><Mail /></span>
            <span><small>Email · Tap to Copy</small><b>{profile.email}</b></span>
          </button>
          <a className="card" href={profile.phoneHref}>
            <span className="bigico green"><Phone /></span>
            <span><small>Phone</small><b>{profile.phone}</b></span>
          </a>
          <a className="card" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="bigico blue"><Linkedin /></span>
            <span><small>LinkedIn</small><b>{profile.linkedinHandle}</b></span>
          </a>
          <a className="card" href={profile.github} target="_blank" rel="noopener noreferrer">
            <span className="bigico amber"><Github /></span>
            <span><small>GitHub</small><b>{profile.githubHandle}</b></span>
          </a>
        </div>
        <form className="card msg" onSubmit={onSubmit}>
          <h3><MessageSquare />Send a Message</h3>
          <label>Your Name<input name="name" required autoComplete="name" /></label>
          <label>Message<textarea name="msg" required /></label>
          <button className="btn primary" type="submit"><Send />Send Message</button>
        </form>
      </div>
    </div></section>
  )
}
