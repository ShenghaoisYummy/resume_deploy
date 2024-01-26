import MediaContact from "./media-contact";
import "./media-contacts-group.css";

const ContactGroup = () => {
  return (
    <div className="media-wrap">
      <MediaContact
        src="/src/assets/images/social-media/basic-mail.svg"
        title="Email"
        subtitle="hsupisces@hotmail.com"
      />
      <MediaContact
        src="/src/assets/images/social-media/basic-link.svg"
        title="Website"
        subtitle="
    https://aldesign.it
    "
      />
      <MediaContact
        src="/src/assets/images/social-media/basic-phone.svg"
        title="Phone"
        subtitle="0491648468"
      />
      <MediaContact
        src="/src/assets/images/social-media/basic-location.svg"
        title="Address"
        subtitle="Homebush, Sydney"
      />
    </div>
  );
};

export default ContactGroup;
