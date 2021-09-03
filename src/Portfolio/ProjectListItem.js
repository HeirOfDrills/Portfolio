import InfoCard from "../Common/InfoCard";

export default function ProjectListItem({ project }) {
  const {
    project_id,
    project_title,
    project_description,
    project_screenshot,
    frontend_repo,
    frontend_deploy,
    backend_repo,
    backend_deploy,
  } = project;

  const projectCard = {
    type: `project${project_id}`,
    image: {
      src: project_screenshot,
      alt: project_description,
    },
    body: {
      title: project_title,
      text: project_description,
    },
  };

  return <InfoCard card={projectCard} />;
}
