import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../Common/InfoCard";
import glass from "../images/glass.png";
import "./Contact.css";

export default function Contact() {
  const contactCard = {
    type: "contact",
    image: {
      src: glass,
      alt: "Stylized purple headshot of Trevor Glascock, Software Engineer.",
    },
    body: {
      title: "Contact Me",
      text: (
        <>
          <a href="https://github.com/TrevorGlascock">
            <p className="social-line">
              <FontAwesomeIcon icon={faGithub} />
              <span className="logo-text">Github</span>
              <FontAwesomeIcon icon={faGithub} />
            </p>
          </a>

          <a href="https://www.linkedin.com/in/trevor-glascock/">
            <p className="social-line">
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="logo-text">LinkedIn</span>
              <FontAwesomeIcon icon={faLinkedin} />
            </p>
          </a>

          <a href="https://twitter.com/GlascockTrevor">
            <p className="social-line">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="logo-text">Twitter</span>
              <FontAwesomeIcon icon={faTwitter} />
            </p>
          </a>
          <a href="mailto:TrevorGlascock@gmail.com">
            <p className="social-line">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="logo-text">Email</span>
              <FontAwesomeIcon icon={faEnvelope} />
              <br />
              <span className="logo-sub-text">
                [ TrevorGlascock@gmail.com ]
              </span>
            </p>
          </a>
        </>
      ),
    },
  };
  return <InfoCard card={contactCard} />;
}
