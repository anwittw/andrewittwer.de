import React from "react";
import ProjectsContent from "../../content/projects";
import ProjectCard from '../ProjectCard'

import { Container, Row, Col } from "reactstrap";

export default function Projects() {
  console.log(ProjectsContent);
  return (
    <div className="Projects p-5">
    <h1 className=" text-center mb-5">Handpicked Projects</h1>
    <div className="card-columns">
      {ProjectsContent.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
      </div>
    </div>
  );
}
