import "./skill.css";

const Skill = (props) => {
  return (
    <div className={props.className1}>
      <div className="skill-icon-wrapper">
        <img className="skill-icon" src={props.src} />
        <div className="skill-icon-name">{props.iconName}</div>
      </div>
      <div className={props.className2}>
        <div className="skill-card-1">
          <div className="skill-text-1">
            {" "}
            Web<br></br>Design{" "}
          </div>
          <div className="skill-divider"></div>

          <div className="skill-text-1">
            Mobile<br></br>Design
          </div>
        </div>
        <div className="skill-card-2">
          User<br></br>Experience
        </div>
        <div className="skill-card-2">
          Wireframing<br></br>Prototyping<br></br>Testing
        </div>
        <div className="skill-card-3">
          Design<br></br>System
        </div>
      </div>
    </div>
  );
};

export default Skill;
