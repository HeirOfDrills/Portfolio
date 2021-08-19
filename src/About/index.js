import InfoCard from "../Common/InfoCard";
import glass from "../images/glass.png";

export default function About() {
  const aboutCard = {
    type: "about",
    image: {
      src: glass,
      alt: "Stylized purple headshot of Trevor Glascock, Software Engineer.",
    },
    body: {
      title: "About Trevor",
      text: (
        <>
          <p>I am a Software Engineer.</p>
        </>
      ),
    },
  };
  return (
    <main>
      <InfoCard card={aboutCard} />
    </main>
  );
}
