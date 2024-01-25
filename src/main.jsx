import ReactDOM from "react-dom/client";

import Header from "./components/aside/header/header";
import Quotes from "./components/aside/quotes/quotes";
import Divider from "./components/aside/divider/divider";
import Media from "./components/aside/soical-media/media";
import Lang from "./components/aside/languages/languages";

import DividerColoumn from "./components/rcontent/divider-column/divider-column";
import Project from "./components/rcontent/project/project";

import "./main.css";
import "./assets/css/resetYui.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="resume">
    <div className="aside">
      <div className="container">
        <Header
          src="/src/assets/images/header/head.png"
          name="Austin"
          role="Full-Stack Developer"
        />
        <Quotes quotes="I'm not a developer, I'm awesome creator." />
        <Divider />
        <div className="media-wrap">
          <Media
            src="/src/assets/images/social-media/basic-mail.svg"
            title="Email"
            subtitle="hsupisces@hotmail.com"
          />
          <Media
            src="/src/assets/images/social-media/basic-link.svg"
            title="Website"
            subtitle="
          https://aldesign.it
          "
          />
          <Media
            src="/src/assets/images/social-media/basic-phone.svg"
            title="Phone"
            subtitle="0491648468"
          />
          <Media
            src="/src/assets/images/social-media/basic-location.svg"
            title="Address"
            subtitle="Homebush, Sydney"
          />
        </div>
        <Divider />
        <div className="media-wrap">
          <div className="media-title">Socials</div>
          <Media
            src="/src/assets/images/social-media/ins.svg"
            title="Instgram"
            subtitle="@shenghaoisyummy"
          />
          <Media
            src="/src/assets/images/social-media/basket.svg"
            title="Dribble"
            subtitle="@shenghaoisyummy
          "
          />
          <Media
            src="/src/assets/images/social-media/twitter.svg"
            title="twitter"
            subtitle="@shenghaoisyummy"
          />
          <Media
            src="/src/assets/images/social-media/linkedin.svg"
            title="Linkedin"
            subtitle="@shenghaoisyummy"
          />
        </div>
        <Divider />

        <div className="media-wrap">
          <div className="media-title">Languages</div>

          <Lang
            src="/src/assets/images/languages/italian.svg"
            title="Italian"
            subtitle="Native"
          />
          <Lang
            src="/src/assets/images/languages/greek.svg"
            title="Greek"
            subtitle="Native"
          />
          <Lang
            src="/src/assets/images/languages/england.svg"
            title="English"
            subtitle="Professional working"
          />
          <Lang
            src="/src/assets/images/languages/Spanish.svg"
            title="spanish"
            subtitle="Elementary"
          />
        </div>
      </div>
    </div>
    <div className="content-wrapper">
      <div className="content">
        <div className="block">
          <DividerColoumn />
          <div className="project">
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
      </div>
    </div>
  </div>
);
