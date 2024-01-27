import Project from "./project";
import "./project-group.css";
import DividerColumn from "../divider-column/divider-column";
import projectData from "../../../data/projectData";

const Projects = () => {
  return (
    <div className="r-content-wrap">
      <DividerColumn className="divider-wrap" />
      <div className="projects-wrap">
        <div className="project-title">Latest projects</div>
        <div className="projects">
          {projectData.map((project, index) => (
            <Project {...project} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
