import React, {useState, useEffect} from "react";
import ProjectsContent from "../../content/projects";
import ProjectCard from '../ProjectCard'

import { Container, Row, Col, Badge } from "reactstrap";

export default function Projects() {

  const [stateTechs, setstateTechs] = useState({
    bootstrap: true,
    reactstrap: true,
    expressJS: true,
    ReactJS: true,
    hbs: true,
    passport: true,
    bCrypt: true,
    strapi: true
  })

  function handleClick(e) {
    let element = e.target.id
    console.log(element)
    e.preventDefault()
    setstateTechs( {
      ...stateTechs,
      [element]: !stateTechs[element]
    })
  }
  
  return (
    <div className="Projects p-md-4">
    <Container>
    <h1 className="my-5">Handpicked Projects</h1>
    <pre>{JSON.stringify(stateTechs,null,2)}</pre> <br />
    <Row>
    <Col className="d-flex justify-content-around mb-4 flex-wrap" sm="12" md={{size: 8}}>
    {Object.keys(stateTechs).map(tech => (
      <Badge className={stateTechs[tech] ? 'Project__Badge__Active' : 'Project__Badge' } id={tech} onClick={handleClick}>{tech}</Badge>
    ))}
    </Col>
    </Row>
    <div className="card-columns">
      {ProjectsContent.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
      </div>
      </Container>
    </div>
  );
}
