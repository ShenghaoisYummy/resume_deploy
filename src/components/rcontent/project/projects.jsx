import Project from "./project";
import "./projects.css";
import DividerColumn from "../divider-column/divider-column";
import projectData from "../../../data/projectData";

const Projects = () => {
  return (
    <div className="r-content-wrap">
      <DividerColumn />
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
