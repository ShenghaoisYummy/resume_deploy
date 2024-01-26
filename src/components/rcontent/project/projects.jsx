import Project from "./project";
import "./projects.css";
import DividerColoumn from "../divider-column/divider-column";

const Projects = () => {
  return (
    <div className="r-content-wrap">
      <DividerColoumn />
      <div className="projects-wrap">
        <div className="project-title">Latest projects</div>
        <div className="projects">
          <Project
            src="/src/assets/images/projects/project1.png"
            title="Powerful Design System"
            text="Figma UI Kit and Design System targeting a wide variety of use cases."
            linkSrc="/src/assets/images/projects/brand.svg"
            href="https://www.figma.com/@angelolibero"
            linkText="https//figma.com"
          />
          <Project
            src="/src/assets/images/projects/project2.png"
            title="Modern Website"
            text="Powerful website + dashboard template for your next Chakra UI project."
            linkSrc="/src/assets/images/projects/basic-link.svg"
            href="https://ui-8.net"
            linkText="https://ui-8.net"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
