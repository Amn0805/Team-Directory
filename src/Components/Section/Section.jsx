import './Section.css'

function Section({ title, children }) {
  return (
    <>
      <div className="section-header">
        <h2>{title}</h2>
        <p>Meet the people building great products together</p>
      </div>
      <div className="content">{children}</div>
    </>
  )
}
export default Section