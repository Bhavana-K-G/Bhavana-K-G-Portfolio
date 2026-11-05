export default function SectionHead({ icon: Icon, title, sub }) {
  return (
    <>
      <div className="head">
        <span className="ico"><Icon /></span>
        <h2>{title}</h2>
      </div>
      {sub && <p className="sub">{sub}</p>}
    </>
  )
}
