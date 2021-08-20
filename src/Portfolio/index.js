import ProjectList from "./ProjectList";
import getProjects from "./Projects";

export default function Portfolio() {
  return (
    <main>
      <ProjectList projects={getProjects()} />
    </main>
  );
}
