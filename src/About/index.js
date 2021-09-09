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
            Greetings! My name is Trevor, though if it tickles your fancy, you
            may also refer to me as The Glascock! I've been captivated by the
            world of software development since I was a wee lad, of course back
            then I was much more interested in the idea of making video games
            (what games-obsessed kid wasn't?), I've since come to greatly enjoy
            the world of Web Development and Software Engineering.
          </p>
          <p>
            Despite my immense interest in the tech world, I'm an incredibly
            outgoing and social kind of guy! I've always been the kid to make
            friends fast, and when I get the chance to socialize my mouth tends
            to move at a mile a minute! I utilized these personable aspects of
            myself to kick off my early career as both a Bartender and a
            Salesman. Although I excelled in these fields, ultimately I felt
            unfulfilled not following my dreams in Web Development.
          </p>
          <p>
            My primary focus lies with Software Engineering, Full-Stack
            Web-Development, Mobile App Development, JavaScript, Node.js, React,
            Express.js, PostgreSQL, JQuery, HTML5, and CSS3.
          </p>
          <p>
            I also have familiarity with Java, C++, Lua, Adobe Photoshop, Adobe
            Illustrator, and Adobe Animate.
          </p>
          <hr />
          <p>
            Please feel free to navigate to my{" "}
            <Link to="/portfolio">Portfolio</Link> to see my recent body of
            work.
          </p>
          <p>
            Alternatively, mosey on over to my{" "}
            <Link to="/contact">Contact</Link> page if you wish to reach me!
          </p>
        </>
      ),
    },
  };
  return <InfoCard card={aboutCard} />;
}
