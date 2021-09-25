import { Link } from "react-router-dom";
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
          <p>
            Between my educational background in Java, my occupational
            experience in Sales & Customer Service, and the practical
            application of my skillset demonstrated in my deployed Full-Stack
            Web Applications, I believe I would be an invaluable asset to any
            Software Engineering team, and am actively seeking Full-Time
            Employment opportunities with tech companies in the Houston area.
          </p>
          <p>
            I am a passionate Engineer who values challenging problems, Test
            Driven Development Principals, and a collaborative team above all
            else. My primary focus with Software Engineering lies in: Full-Stack
            Web-Development, Mobile App Development, Algorithmic Optimizations,
            Java, JavaScript, Node.js, React, Express.js, PostgreSQL, JQuery,
            HTML5, and CSS3.
          </p>
          <p>
            I also have familiarity with C++, Lua, Adobe Photoshop, Adobe
            Illustrator, and Adobe Animate. I am ever eager to acquire more
            skills whenever provided with the opportunity.
          </p>

          <hr />
          <p>
            Please feel free to navigate to my{" "}
            <Link to="/portfolio">Portfolio</Link> to see my recent body of
            work.
          </p>
          <p>
            Alternatively, you may direct yourself to my{" "}
            <Link to="/contact">Contact</Link> page if you wish to reach me directly.
          </p>
        </>
      ),
    },
  };
  return <InfoCard card={aboutCard} />;
}
