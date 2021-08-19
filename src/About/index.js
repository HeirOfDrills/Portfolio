import InfoCard from "../Common/InfoCard";
import glass from "../images/glass.png";
import "./index.css";

export default function About() {
  const infoCard = {
    type: "about",
    image: {
      src: glass,
      alt: "Stylized purple headshot of Trevor Glascock, Software Engineer.",
    },
    body: {
      title: "About Trevor",
      text: "I am a Software Engineer.",
    },
  };
  return (
    <main>
      <InfoCard card={infoCard} />
    </main>
  );
}
