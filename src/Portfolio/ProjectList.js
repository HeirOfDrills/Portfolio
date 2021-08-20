import ProjectListItem from "./ProjectListItem";

export default function ProjectList({ projects }) {
  const projectCards = projects.map((project, index) => (
    <ProjectListItem key={index} project={project} />
  ));

  return <main>{projectCards}</main>;
}
