import { Briefcase, Building2, Calendar } from 'lucide-react'
import { experience } from '../data/portfolio'
import SectionHead from './SectionHead'

export default function Experience() {
  return (
    <section id="experience"><div className="wrap">
      <SectionHead icon={Briefcase} title="Experience" sub="From data analytics intern to leading a product frontend." />
      <div className="roles">
        {experience.map(({ title, org, when, icon: Icon, now, highlights }) => (
          <article key={title} className={`card roleCard${now ? ' now' : ''}`}>
            <span className="logo"><Icon /></span>
            <div><h3>{title}</h3><p className="org"><Building2 />{org}</p></div>
            <span className="when"><Calendar />{when}</span>
            <div className="hl">
              {highlights.map(([label, HIcon]) => <span key={label}><HIcon />{label}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div></section>
  )
}
