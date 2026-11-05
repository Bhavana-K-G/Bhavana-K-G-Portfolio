import { Layers } from 'lucide-react'
import { builds } from '../data/portfolio'
import SectionHead from './SectionHead'

export default function Work() {
  return (
    <section id="work"><div className="wrap">
      <SectionHead icon={Layers} title="What I Build" sub="Products I’ve built at MultiplexEV." />
      <div className="builds">
        {builds.map(({ title, text, icon: Icon, tone, feats, stack }) => (
          <article key={title} className="card build">
            <div className="row">
              <span className={`bigico ${tone}`}><Icon /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
            <div className="feats">
              {feats.map(([label, FIcon]) => <span key={label} className="feat"><FIcon />{label}</span>)}
            </div>
            <div className="stack"><b>Stack</b> {stack}</div>
          </article>
        ))}
      </div>
    </div></section>
  )
}
