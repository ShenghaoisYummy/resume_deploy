import ReactDOM from "react-dom/client";

import Header from "./components/aside/header/header";
import Quotes from "./components/aside/quotes/quotes";
import Divider from "./components/aside/divider/divider";
import MediaGroup from "./components/aside/contacts-media/media-group";
import ContactGroup from "./components/aside/contacts-media/contact-group";
import LangGroup from "./components/aside/languages/language-group";

import Projects from "./components/rcontent/project/project-group";
import ExpGroup from "./components/rcontent/experience/experience-group";
import EducationGroup from "./components/rcontent/education/education-group";

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
        <ContactGroup />
        <Divider />
        <MediaGroup />
        <Divider />
        <LangGroup />
      </div>
    </div>
    <div className="content-wrapper">
      <div className="content">
        <div className="block">
          <Projects />
          <ExpGroup />
          <EducationGroup />
        </div>
      </div>
    </div>
  </div>
);
