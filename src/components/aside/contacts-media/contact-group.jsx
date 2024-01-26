import MediaContact from "./media-contact";
import "./media-contacts-group.css";
import contactGroupInfo from "../../../data/contactData";

const ContactGroup = () => {
  return contactGroupInfo.map((item, index) => (
    <MediaContact {...item} key={index} />
  ));
};

export default ContactGroup;
