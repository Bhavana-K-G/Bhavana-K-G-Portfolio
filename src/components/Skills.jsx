import { Cpu } from 'lucide-react'
import { skills } from '../data/portfolio'
import SectionHead from './SectionHead'

export default function Skills() {
  return (
    <section id="skills"><div className="wrap">
      <SectionHead icon={Cpu} title="Skills" sub="Tools I use day to day, grouped by where they sit in the stack." />
      <div className="skills">
        {skills.map(({ title, icon: Icon, tone, items }) => (
          <div key={title} className="card skill">
            <div className="top"><span className={`bigico ${tone}`}><Icon /></span><h3>{title}</h3></div>
            <div className="pills">{items.map((s) => <span key={s}>{s}</span>)}</div>
          </div>
        ))}
      </div>
    </div></section>
  )
}
