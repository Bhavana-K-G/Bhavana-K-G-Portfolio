import { Workflow } from 'lucide-react'
import { process } from '../data/portfolio'
import SectionHead from './SectionHead'

export default function Process() {
  return (
    <section id="process"><div className="wrap">
      <SectionHead icon={Workflow} title="How I Work" sub="The habits behind the shipped work." />
      <div className="process">
        {process.map(({ title, text, icon: Icon, tone }) => (
          <div key={title} className="card pstep">
            <span className={`bigico ${tone}`}><Icon /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div></section>
  )
}
