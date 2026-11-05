import { GraduationCap, Loader } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionHead from './SectionHead'

export default function Education() {
  return (
    <section id="education"><div className="wrap">
      <SectionHead icon={GraduationCap} title="Education" sub="Engineering degree, now pursuing a master’s in data engineering." />
      <div className="edus">
        {education.map(({ degree, place, icon: Icon, tone, pursuing, cgpa }) => (
          <div key={degree} className={`card edu${pursuing ? ' now' : ''}`}>
            <span className={`bigico ${tone}`}><Icon /></span>
            <div><h3>{degree}</h3><p>{place}</p></div>
            {pursuing && <span className="pursuing"><Loader />Pursuing</span>}
            {cgpa && <div className="cgpa"><b>{cgpa}</b><span>CGPA out of 10</span></div>}
          </div>
        ))}
      </div>
    </div></section>
  )
}
