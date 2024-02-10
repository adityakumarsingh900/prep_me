import useDeviceType from "../useDeviceType";

export default function Card({ heading, content, isClickable, id }) {
  const isMobile = useDeviceType();
  return (
    <div
      className="card"
      onClick={() => isClickable && isMobile && (window.location.hash = id)}
    >
      <div className="heading">{heading}</div>
      <div>
        <ul>
          {content.map((item, index) => (
            <li
              key={index}
              style={{ marginTop: "8px", whiteSpace: "pre-wrap" }}
            >
              {item}
            </li>
          ))}
          {isClickable && (
            <li
              style={{
                marginTop: "8px",
                fontStyle: "italic",
                color: "aqua",
              }}
              onClick={() => !isMobile && (window.location.hash = id)}
            >
              Tap to read more...
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
