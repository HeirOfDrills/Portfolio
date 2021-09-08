import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";

export default function HomePage({ projects }) {
  return (
    <>
      <About />
      <Portfolio projects={projects} />
      <Contact />
    </>
  );
}
