import Exp from "./experience";
import DividerColumn from "../divider-column/divider-column";
import experiences from "../../../data/experienceData";

const ExpGroup = () => {
  return (
    <div className="r-content-wrap">
      <DividerColumn />
      <div className="projects-wrap">
        <div className="project-title">Experience</div>
        <div className="experience-wrap">
          {experiences.map((experience, index) => (
            <Exp
              key={index}
              {...experience}
              className={
                index === experiences.length - 1
                  ? "divider-wrap-small-off"
                  : "divider-wrap-small-on"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpGroup;
