import { useState } from 'react'
import { ExternalLink, FolderGit2, Github } from 'lucide-react'
import { projectFilters, projects } from '../data/portfolio'
import SectionHead from './SectionHead'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const visible = projects.filter((p) => filter === 'all' || p.types.includes(filter))

  return (
    <section id="projects"><div className="wrap">
      <SectionHead icon={FolderGit2} title="Side Projects" sub="Things I built to learn, from plain JavaScript to full MERN apps." />
      <div className="filters" role="group" aria-label="Filter projects">
        {projectFilters.map(({ id, label, icon: Icon }) => (
          <button key={id} aria-pressed={filter === id} onClick={() => setFilter(id)}><Icon />{label}</button>
        ))}
      </div>
      <div className="projects">
        {visible.map(({ title, text, image, tags, code, live }) => (
          <article key={title} className="card proj">
            <div className="shot"><img src={image} alt={`${title} screenshot`} loading="lazy" /></div>
            <div className="body">
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="ptags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="plinks">
                <a href={code} target="_blank" rel="noopener noreferrer"><Github />Code</a>
                {live && <a href={live} target="_blank" rel="noopener noreferrer"><ExternalLink />Live</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div></section>
  )
}
