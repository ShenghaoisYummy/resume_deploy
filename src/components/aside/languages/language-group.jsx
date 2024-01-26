import Lang from "./languages";
import languageData from "../../../data/languageData";

const LangGroup = () => {
  return (
    <div className="media-wrap">
      <div className="media-title">Languages</div>
      {languageData.map((language, index) => (
        <Lang key={index} {...language} />
      ))}
    </div>
  );
};

export default LangGroup;
