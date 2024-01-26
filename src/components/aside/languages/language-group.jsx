import Lang from "./languages";

const LangGroup = () => {
  return (
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
  );
};

export default LangGroup;
