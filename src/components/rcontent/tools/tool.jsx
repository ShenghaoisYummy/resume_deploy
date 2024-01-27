import "./tool.css";

const Tool = (props) => {
  return (
    <div className={`tool-wrap-${props.size}`}>
      <img className={`tool-img-${props.size}`} src={props.src} />
      <div className="tool-text-wrap">
        <div className="tool-title">{props.title}</div>
        <div className="tool-subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
};

export default Tool;
