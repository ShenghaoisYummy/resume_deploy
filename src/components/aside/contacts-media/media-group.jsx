import MediaContact from "./media-contact";
import "./media-contacts-group.css";

const ContactGroup = () => {
  return (
    <div className="media-wrap">
      <div className="media-title">Socials</div>
      <MediaContact
        src="/src/assets/images/social-media/ins.svg"
        title="Instgram"
        subtitle="@shenghaoisyummy"
      />
      <MediaContact
        src="/src/assets/images/social-media/basket.svg"
        title="Dribble"
        subtitle="@shenghaoisyummy
"
      />
      <MediaContact
        src="/src/assets/images/social-media/twitter.svg"
        title="twitter"
        subtitle="@shenghaoisyummy"
      />
      <MediaContact
        src="/src/assets/images/social-media/linkedin.svg"
        title="Linkedin"
        subtitle="@shenghaoisyummy"
      />
    </div>
  );
};

export default ContactGroup;
