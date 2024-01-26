import Exp from "./experience";
import DividerColoumn from "../divider-column/divider-column";

const ExpGroup = () => {
  return (
    <div className="r-content-wrap">
      <DividerColoumn />
      <div className="projects-wrap">
        <div className="project-title">Experience</div>
        <div className="experience-wrap">
          <Exp
            className="divider-wrap-small-on"
            date="Jul 20 - Jan 2022"
            compSrc="/src/assets/images/experience/apple.svg"
            loc="Cupertino"
            jobTitle="Product designer"
            company="Apple"
            description="Omnis minima inventore minus. Aut et incidunt. Aut fugiat culpa illum optio dolorum aut maxime ipsa. Laborum incidunt enim consectetur perspiciatis. Dolore ullam dolor impedit dolorum recusandae facilis quo et. Et ipsam vel sunt qui ut officia voluptatem."
          />
          <Exp
            className="divider-wrap-small-on"
            date="Jul 20 - Jan 2022"
            compSrc="/src/assets/images/experience/apple.svg"
            loc="Cupertino"
            jobTitle="Product designer"
            company="Apple"
            description="Omnis minima inventore minus. Aut et incidunt. Aut fugiat culpa illum optio dolorum aut maxime ipsa. Laborum incidunt enim consectetur perspiciatis. Dolore ullam dolor impedit dolorum recusandae facilis quo et. Et ipsam vel sunt qui ut officia voluptatem."
          />
          <Exp
            className="divider-wrap-small-on"
            date="Jul 20 - Jan 2022"
            compSrc="/src/assets/images/experience/apple.svg"
            loc="Cupertino"
            jobTitle="Product designer"
            company="Apple"
            description="Omnis minima inventore minus. Aut et incidunt. Aut fugiat culpa illum optio dolorum aut maxime ipsa. Laborum incidunt enim consectetur perspiciatis. Dolore ullam dolor impedit dolorum recusandae facilis quo et. Et ipsam vel sunt qui ut officia voluptatem."
          />
          <Exp
            className="divider-wrap-small-off"
            date="Jul 20 - Jan 2022"
            compSrc="/src/assets/images/experience/apple.svg"
            loc="Cupertino"
            jobTitle="Product designer"
            company="Apple"
            description="Omnis minima inventore minus. Aut et incidunt. Aut fugiat culpa illum optio dolorum aut maxime ipsa. Laborum incidunt enim consectetur perspiciatis. Dolore ullam dolor impedit dolorum recusandae facilis quo et. Et ipsam vel sunt qui ut officia voluptatem."
          />
        </div>
      </div>
    </div>
  );
};
export default ExpGroup;
