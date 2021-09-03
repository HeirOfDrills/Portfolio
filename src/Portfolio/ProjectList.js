import { useEffect, useState } from "react";
import { listProjects } from "../utils/api";
import ProjectListItem from "./ProjectListItem";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const ctrl = new AbortController();
    listProjects(ctrl.signal).then(setProjects).catch(console.error);

    return () => ctrl.abort();
  }, []);

  const projectCards = projects.map((project) => (
    <ProjectListItem key={project.project_id} project={project} />
  ));

  return <main>{projectCards}</main>;
}
