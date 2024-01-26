import Education from "./education";
import DividerColumn from "../divider-column/divider-column";
import educationData from "../../../data/educationData";

const EducationGroup = () => {
  return (
    <div className="r-content-wrap">
      <DividerColumn />
      <div className="projects-wrap">
        <div className="project-title">Education</div>
        <div className="projects">
          {educationData.map((education, index) => {
            return <Education key={index} {...education} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationGroup;
