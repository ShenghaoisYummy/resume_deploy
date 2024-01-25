import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/aside/header/header";
import "./main.css";
import "./assets/css/resetYui.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="resume">
    <div className="aside">
      <div className="container">
        <Header
          src="/src/assets/images/head.png"
          name="Austin"
          role="Full-stack Developer"
        />
      </div>
    </div>
    <div className="content-wrapper"></div>
  </div>
);
