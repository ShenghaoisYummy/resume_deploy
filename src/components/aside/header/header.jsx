import "./header.css";
const Header = (props) => {
  return (
    <div className="header">
      <img src={props.src} alt="" />

      <div className="text-wrapper">
        <div className="name">{props.name}</div>

        <div className="role">{props.role}</div>
      </div>
    </div>
  );
};

export default Header;
