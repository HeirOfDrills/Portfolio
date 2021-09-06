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
          <p>
            <a href="https://github.com/TrevorGlascock">Github</a>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/trevor-glascock/">LinkedIn</a>
          </p>

          <p>
            <a href="mailto:TrevorGlascock@gmail.com">Email</a>
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
