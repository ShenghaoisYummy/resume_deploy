import "./experience.css";
import DividerColoumnSmall from "../divider-column/divider-column-small";

const Exp = (props) => {
  return (
    <div className="experience-content">
      <DividerColoumnSmall className={props.className} />
      <div className="experience-content-wrap">
        <div className="experience-info">
          <div className="experience-date-loc">
            <p className="experience-date">{props.date}</p>
            <div className="experience-loc">
              <div className="loc">
                <img src="experience/basic-location.svg" />
              </div>
              <div className="loc-text">{props.loc}</div>
            </div>
          </div>
          <div className="experience-icon-comp">
            <img className="comp" src={props.compSrc}></img>
            <div className="experience-comp">
              <div className="exp-title">{props.jobTitle}</div>
              <div className="exp-subtitle">{props.company}</div>
            </div>
          </div>
        </div>
        <div className="experience-details">{props.description}</div>
      </div>
    </div>
  );
};

export default Exp;
