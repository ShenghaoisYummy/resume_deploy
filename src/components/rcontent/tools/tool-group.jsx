import Tool from "./tool";
import DividerColoumn from "../divider-column/divider-column";
import { toolGroupInfo, toolGroupInfo2 } from "../../../data/toolData";

const ToolGroup = () => {
  return (
    <div className="r-content-wrap">
      <DividerColoumn className="divider-wrap-off" />
      <div className="projects-wrap">
        <div className="project-title">Tools</div>
        <div className="tool-column">
          <div className="tool-row">
            {toolGroupInfo.map((group, index) => (
              <Tool key={index} {...group} />
            ))}
          </div>
          <div className="tool-row">
            {toolGroupInfo2.map((group, index) => (
              <Tool key={index} {...group} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolGroup;
