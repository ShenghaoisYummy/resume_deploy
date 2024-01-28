import "./divider-column.css";

const DividerColoumn = (props) => {
  return (
    <div className={props.className}>
      <div className="divider-icon">
        <img src="divider/misc-dot-big.svg" />
      </div>
      <div className="divider-column"></div>
    </div>
  );
};

export default DividerColoumn;
