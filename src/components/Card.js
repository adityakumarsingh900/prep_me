export default function Card({ heading, content, isClickable, id }) {
  return (
    <div className="card" onClick={() => isClickable && (window.location.hash = id)}>
      <div className="heading">{heading}</div>
      <div>
        <ul>
          {content.map((item, index) => (
            <li key={index} style={{ marginTop: '8px', whiteSpace: 'pre-wrap' }}>{item}</li>
          ))}
          {isClickable && <li style={{ marginTop: '8px', fontStyle: 'italic', color: 'aqua' }}>Tap to read more...</li> }
        </ul>
      </div>
    </div>
  )
}