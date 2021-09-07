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
          <p className="social-line">
            <a href="https://github.com/TrevorGlascock">
              <FontAwesomeIcon icon={faGithub} />
              <span className="logo-text">Github</span>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>

          <p className="social-line">
            <a href="https://www.linkedin.com/in/trevor-glascock/">
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="logo-text">LinkedIn</span>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </p>

          <p className="social-line">
            <a href="https://twitter.com/GlascockTrevor">
              <FontAwesomeIcon icon={faTwitter} />
              <span className="logo-text">Twitter</span>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </p>

          <p className="social-line">
            <a href="mailto:TrevorGlascock@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="logo-text">Email</span>
              <FontAwesomeIcon icon={faEnvelope} />
              <br />
              <span className="logo-sub-text">
                [ TrevorGlascock@gmail.com ]
              </span>
            </a>
          </p>
        </>
      ),
    },
  };
  return (
    <main>
      <InfoCard card={contactCard} />
    </main>
  );
}
