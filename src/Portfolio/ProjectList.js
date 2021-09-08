import LoadingMessage from "../Common/LoadingMessage";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList({ projects }) {
  const projectCards = projects.map((project) => (
    <ProjectListItem key={project.project_id} project={project} />
  ));

  return projects.length ? (
    <>{projectCards}</>
  ) : (
    <LoadingMessage itemToLoad="Projects" />
  );
}
