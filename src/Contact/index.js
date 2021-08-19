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
          <button href="https://github.com/TrevorGlascock">Github</button>
          <button href="https://www.linkedin.com/in/trevor-glascock/">
            LinkedIn
          </button>
          <button href="mailto:TrevorGlascock@gmail.com">Email</button>
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
