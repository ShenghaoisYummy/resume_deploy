import "./media-contact.css";
const MediaContact = (props) => {
  return (
    <div className="media">
      <div className="featured-icon">
        <img className="media-img" src={props.src} alt=" "></img>
      </div>
      <div className="media-text">
        <div className="title">{props.title}</div>
        <div className="subtitle">{props.subtitle}</div>
      </div>
    </div>
  );
};

export default MediaContact;
