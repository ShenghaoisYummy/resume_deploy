import "./languages.css";
const Lang = (props) => {
  return (
    <div className="lang">
      <div className="featured-icon">
        <img className="lang-img" src={props.src} alt=" "></img>
      </div>
      <div className="lang-text">
        <div className="title">{props.title}</div>
        <div className="subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
};

export default Lang;
