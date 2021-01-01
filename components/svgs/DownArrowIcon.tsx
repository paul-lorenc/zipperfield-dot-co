interface Props {
  css: string;
}

const DownArrowIcon = (props: Props) => (
  <svg viewBox="-3 -3 62 62" className={props.css}>
    <title>{"\n    down-arrow\n  "}</title>
    <circle
      cx={27.6}
      cy={27.6}
      r={27.1}
      style={{
        fill: "none",
        stroke: "currentcolor",
        strokeWidth: 3,
      }}
    />
    <path
      d="M30,59.2"
      transform="translate(-2.4 -2.4)"
      style={{
        fill: "none",
        stroke: "currentcolor",
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="M30,0"
      transform="translate(-2.4 -2.4)"
      style={{
        fill: "none",
        stroke: "currentcolor",
        strokeMiterlimit: 10,
      }}
    />
    <polygon
      points="27.6 35.8 41.2 16.1 44.9 16.1 27.6 46.2 10.3 16.1 13.9 16.1 27.6 35.8"
      style={{
        fill: "currentcolor",
      }}
    />
    <polygon
      points="27.6 46.2 44.9 16.1 48.6 16.1 27.6 46.2"
      style={{
        fill: "#808285",
      }}
    />
    <polygon
      points="10.3 16.1 27.6 46.2 6.6 16.1 10.3 16.1"
      style={{
        fill: "#808285",
      }}
    />
  </svg>
);

export default DownArrowIcon;
