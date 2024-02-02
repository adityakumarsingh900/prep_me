export default function Card({ heading, content}) {
  return (
    <div className="card">
      <div className="heading">{heading}</div>
      <div>
        <ul>
          {content.map((item, index) => (
            <li key={index} style={{ marginTop: '8px', whiteSpace: 'pre-wrap' }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}