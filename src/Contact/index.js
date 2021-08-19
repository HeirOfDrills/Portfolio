import InfoCard from "../Common/InfoCard";
import glass from "../images/glass.png";

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
          <ul>
            <li>
              <a href="https://github.com/TrevorGlascock">GitHub</a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/trevor-glascock/">
                LinkedIn
              </a>
            </li>

            <li>
              <a href="mailto:TrevorGlascock@gmail.com">Email</a>
            </li>
          </ul>
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
