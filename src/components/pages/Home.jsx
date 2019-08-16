import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import MyDetails from "../MyDetails";
import MainNavbar from "../MainNavbar";
import Socials from "../Socials";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  const [stateActive, setstateActive] = useState({
    details: true,
    projects: false,
    contact: false
  });

  function handleClick(e) {
    setstateActive({
      ...stateActive,
      details: false,
      projects: false,
      contact: false,
      [e.target.id]: true
    });
  }

  function handleClickState(state) {
    setstateActive({
      ...stateActive,
      details: false,
      projects: false,
      contact: false,
      [state]: true
    });
  }
  return (
    <div className="Home">
      <Container className="my-5 Home__Container">
        <Row className="mb-4">
          <Col
            xs={{ size: 12 }}
            sm={{ offset: 3, size: 9 }}
            md={{ offset: 6, size: 6 }}
            lg={{ offset: 7, size: 5 }}
          >
            {" "}
            <Socials />{" "}
          </Col>
        </Row>
        <div className="global-shadow">
          <Row>
            <Col md={{ size: 12 }}>
              {stateActive.details && (
                <MyDetails
                  handleClickContactMe={() => handleClickState("contact")}
                  handleClickPortfolio={() => handleClickState("projects")}
                />
              )}
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 12 }}>
              <MainNavbar state={stateActive} handleClick={handleClick} />
            </Col>
          </Row>
          <Row>
            <Col md={{ size: 12 }}>
              {stateActive.projects && <Projects />}
              {stateActive.contact && <Contact />}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
