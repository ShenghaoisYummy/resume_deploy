import MediaContact from "./media-contact";
import "./media-contacts-group.css";
import socialMediaInfo from "../../../data/soicalData";

const ContactGroup = () => {
  return (
    <div className="media-wrap">
      <div className="media-title">Socials</div>
      {socialMediaInfo.map((item, index) => (
        <MediaContact {...item} key={index} />
      ))}
    </div>
  );
};

export default ContactGroup;
