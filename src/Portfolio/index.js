import { useState } from "react";
import ProjectList from "./ProjectList";
import getProjects from "./Projects";

export default function Portfolio() {
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Welcome to Trevor's Portfolio!</h1>
      <ProjectList projects={getProjects()} />
    </main>
  );
}
