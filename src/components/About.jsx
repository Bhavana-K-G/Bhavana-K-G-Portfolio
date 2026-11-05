import { UserRound } from 'lucide-react'
import { about, domains, stats } from '../data/portfolio'
import SectionHead from './SectionHead'

export default function About() {
  return (
    <section id="about"><div className="wrap">
      <SectionHead icon={UserRound} title="About" sub="A frontend specialist who also works on APIs, mobile and data pipelines." />
      <div className="stats">
        {stats.map(({ value, label, icon: Icon, tone }) => (
          <div key={label} className="card stat">
            <span className={`bigico ${tone}`}><Icon /></span>
            <div><b>{value}</b><span>{label}</span></div>
          </div>
        ))}
      </div>
      <div className="about">
        <div className="card intro">{about.map((p) => <p key={p}>{p}</p>)}</div>
        <div className="card domains">
          <h3>Domains I Work In</h3>
          {domains.map(({ title, text, icon: Icon, tone }) => (
            <div key={title} className="dom">
              <span className={`bigico ${tone}`}><Icon /></span>
              <div><b>{title}</b><span>{text}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div></section>
  )
}
