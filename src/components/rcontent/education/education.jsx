import "./education.css";

const Education = (props) => {
  return (
    <div className="education-wrapper">
      <div className="icon-wrapper">
        <img src={props.src} className="education-icon" />
        <div className="education-name">{props.name}</div>
      </div>
      <div className="education-date-title">
        <div className="education-title">{props.title}</div>
        <div className="education-date">{props.date}</div>
      </div>
    </div>
  );
};

export default Education;
