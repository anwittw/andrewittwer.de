import React, { useState } from "react";
import ProjectsContent from "../../content/projects";
import ProjectCard from "../ProjectCard";

import { Container, Row, Col, Badge } from "reactstrap";

export default function Projects() {
  const [stateTechs, setstateTechs] = useState({
    frontend: true,
    backend: true,
    fullstack: true
  });

  function handleClick(e) {
    let element = e.target.id;
    e.preventDefault();
    setstateTechs({
      ...stateTechs,
      [element]: !stateTechs[element]
    });
  }

  function filterProjects(projects, filters) {
    let toShow = [];
    if (filters.frontend) toShow.push("frontend");
    if (filters.backend) toShow.push("backend");
    if (filters.fullstack) toShow.push("fullstack");
    return projects.filter(project => {
      return toShow.includes(project.type);
    });
  }

  return (
    <div className="Projects p-md-4">
      <Container>
        <h1 className="mt-5 mb-2">Handpicked Projects</h1>
        <Row>
          <Col
            className="d-flex justify-content-around mb-4 flex-wrap"
            sm="12"
            md={{ offset: 4, size: 4 }}
          >
            <Badge
              className={
                stateTechs.frontend
                  ? "Project__Badge__Active"
                  : "Project__Badge"
              }
              id="frontend"
              onClick={handleClick}
            >
              frontend
            </Badge>
            <Badge
              className={
                stateTechs.backend ? "Project__Badge__Active" : "Project__Badge"
              }
              id="backend"
              onClick={handleClick}
            >
              backend
            </Badge>
            <Badge
              className={
                stateTechs.fullstack
                  ? "Project__Badge__Active"
                  : "Project__Badge"
              }
              id="fullstack"
              onClick={handleClick}
            >
              fullstack
            </Badge>
          </Col>
        </Row>
        {!stateTechs.frontend && !stateTechs.backend && !stateTechs.fullstack && (
          <div>
            <p className="Project__NoStack">
              {" "}
              - Please Select at least one stack -{" "}
            </p>
          </div>
        )}
        <div className="card-columns">
          {filterProjects(ProjectsContent, stateTechs).map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
