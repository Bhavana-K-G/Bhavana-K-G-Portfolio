import { useEffect, useRef, useState } from 'react'
import { RotateCcw } from 'lucide-react'
import { now, roadmap, routePath } from '../data/portfolio'
import { prefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const DRIVE = 950
const PAUSE = 420

/** Career roadmap: a vehicle drives stop to stop, revealing each role as it arrives. */
export default function RouteMap() {
  const mapRef = useRef(null)
  const pathRef = useRef(null)
  const vehicleRef = useRef(null)
  const carRef = useRef(null)
  const rafRef = useRef(0)
  const [reached, setReached] = useState(-1)
  const [finished, setFinished] = useState(false)
  const [runId, setRunId] = useState(0)

  // start when the map scrolls into view
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { io.disconnect(); setRunId(1) }
    }, { threshold: 0.3 })
    io.observe(mapRef.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const path = pathRef.current
    const len = path.getTotalLength()
    path.style.strokeDasharray = len

    // distance along the path closest to each stop
    const samples = Array.from({ length: 601 }, (_, i) => {
      const l = (len * i) / 600
      const p = path.getPointAtLength(l)
      return [l, p.x, p.y]
    })
    const at = roadmap.map(({ pin: [x, y] }) =>
      samples.reduce((best, q) => ((q[1] - x) ** 2 + (q[2] - y) ** 2 < (best[1] - x) ** 2 + (best[2] - y) ** 2 ? q : best))[0])
    at[0] = 0
    at[at.length - 1] = len

    const place = (l) => {
      l = Math.max(0, Math.min(len, l))
      const p = path.getPointAtLength(l)
      const a = path.getPointAtLength(Math.min(len, l + 1))
      const b = path.getPointAtLength(Math.max(0, l - 1))
      vehicleRef.current.setAttribute('transform', `translate(${p.x} ${p.y})`)
      carRef.current.setAttribute('transform', `rotate(${(Math.atan2(a.y - b.y, a.x - b.x) * 180) / Math.PI})`)
      path.style.strokeDashoffset = len - l
    }

    setReached(-1)
    setFinished(false)
    place(0)
    if (!runId) return

    if (prefersReducedMotion()) {
      place(len); setReached(roadmap.length - 1); setFinished(true)
      return
    }

    // timeline: reveal stop 0, then drive → reveal for each next stop
    const steps = []
    let t = 350
    steps.push({ t, reveal: 0 }); t += PAUSE
    for (let i = 1; i < at.length; i++) {
      steps.push({ t, from: at[i - 1], to: at[i] }); t += DRIVE
      steps.push({ t, reveal: i }); t += PAUSE
    }
    const total = t
    const t0 = performance.now()
    const tick = (nowTs) => {
      const e = nowTs - t0
      for (const s of steps) {
        if (s.reveal !== undefined) { if (e >= s.t) setReached((r) => Math.max(r, s.reveal)) }
        else if (e >= s.t && e < s.t + DRIVE) place(s.from + (s.to - s.from) * ease((e - s.t) / DRIVE))
      }
      if (e < total) rafRef.current = requestAnimationFrame(tick)
      else { place(len); setFinished(true) }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [runId])

  const shown = (i) => (i <= reached ? ' show' : '')

  return (
    <figure className="map anim" ref={mapRef} aria-label="Career route map from 2022 to now">
      <svg className="m" viewBox="0 0 620 440" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <g className="grid">
          {[88, 176, 264, 352].map((y) => <line key={`h${y}`} x1="0" y1={y} x2="620" y2={y} />)}
          {[124, 248, 372, 496].map((x) => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="440" />)}
        </g>
        <path className="zone" d="M20 260 L200 246 L214 420 L28 430 Z" />
        <g className="crop">
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1={40 + i * 2} y1={290 + i * 28} x2={198 + i * 2.5} y2={278 + i * 28} />
          ))}
        </g>
        <path className="zone" d="M420 110 L600 118 L594 250 L410 240 Z" />
        <path className="zone" d="M380 270 L560 258 L572 400 L390 410 Z" />
        <path className="route-bg" d={routePath} />
        <path className="route" d={routePath} ref={pathRef} />

        {roadmap.map((s, i) => (
          <g key={s.dates} className={`card-lbl${s.now ? ' now' : ''}${shown(i)}`}>
            <rect x={s.card[0]} y={s.card[1]} width="166" height="56" rx="10" />
            <text className="ld" x={s.card[0] + 11} y={s.card[1] + 18}>{s.dates}</text>
            <text className="lc" x={s.card[0] + 11} y={s.card[1] + 34}>{s.company}</text>
            <text className="lr" x={s.card[0] + 11} y={s.card[1] + 49}>{s.role}</text>
          </g>
        ))}
        {roadmap.map((s, i) => (
          <g key={`pin${i}`} className={`stop${s.now ? ' now' : ''}${i <= reached ? ' hit' : ''}`}>
            <circle cx={s.pin[0]} cy={s.pin[1]} r="11" />
            <text x={s.pin[0]} y={s.pin[1] + 4}>{i + 1}</text>
          </g>
        ))}
        <g ref={vehicleRef} className={finished ? 'done' : undefined}>
          <circle className="pulse" r="10" />
          <g className="car" ref={carRef}>
            <rect x="-12" y="-8" width="24" height="16" rx="6" />
            <path d="M3 -4.5 L9 0 L3 4.5 Z" />
          </g>
        </g>
      </svg>

      <ol className="legend">
        {roadmap.map((s, i) => (
          <li key={s.dates} className={`${s.now ? 'now' : ''}${shown(i)}`}>
            <span className="n">{i + 1}</span>
            <span><small>{s.dates}</small><b>{s.company}</b><em>{s.role}</em></span>
          </li>
        ))}
      </ol>

      <div className="mapnow">
        <span><i className="live" /><b>Now</b></span>
        {now.map(({ label, icon: Icon }) => <span key={label}><Icon />{label}</span>)}
        <button className={`replay${finished ? ' show' : ''}`} onClick={() => setRunId((n) => n + 1)}
          aria-label="Replay route animation" tabIndex={finished ? 0 : -1}>
          <RotateCcw />Replay
        </button>
      </div>
    </figure>
  )
}
