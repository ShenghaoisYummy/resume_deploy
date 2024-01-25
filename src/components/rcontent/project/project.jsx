import "./project.css";

const Project = (props) => {
  return (
    <div className="project-wrap">
      <div className="project-content">
        <img src={props.src} />

        <div className="project-text">
          <div className="project-name">{props.title}</div>
          <p className="project-span">{props.text}</p>
        </div>
      </div>
      <div className="project-link">
        <div className="image-wrapper">
          <img src={props.linkSrc} />
        </div>
        <div className="subtitle-wrapper">
          <a href={props.href}>{props.linkText}</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
