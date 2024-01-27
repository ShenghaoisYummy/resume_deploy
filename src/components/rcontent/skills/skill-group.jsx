import Skill from "./skill";
import DividerColoumn from "../divider-column/divider-column";
import skillDataInfo from "../../../data/skillData";

const SkillGroup = () => {
  return (
    <div className="r-content-wrap">
      <DividerColoumn />
      <div className="projects-wrap">
        <div className="project-title">Skills</div>
        <div className="skill-content">
          {skillDataInfo.map((skill, index) => {
            return <Skill {...skill} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillGroup;
