import "./divider-column-small.css";

const DividerColoumnSmall = (props) => {
  return (
    <div className={props.className}>
      <div className="divider-icon-small">
        <img src="divider/misc-dot-small.svg" />
      </div>
      <div className="divider-column-small"></div>
    </div>
  );
};

export default DividerColoumnSmall;
