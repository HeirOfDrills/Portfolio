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
      href: frontend_deploy ? frontend_deploy : backend_deploy, // href will be frontend_deploy if it exists, otherwise it is backend_deploy or null;
    },
    body: {
      title: project_title,
      text: <p>{project_description}</p>,
      frontend_repo,
      backend_repo,
    },
    flip: project_id % 2,
  };

  return <InfoCard card={projectCard} />;
}
