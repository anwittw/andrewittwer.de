import React from "react";

import { Container, Row, Col } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function MainNavbar(props) {
  return (
    <div className="MainNavbar">
      <Container fluid className="m-0 p-0">
        <Row>
          <Col className="pr-0">
            <div
              id="details"
              onClick={e => props.handleClick(e)}
              className={
                props.state.details
                  ? "MainNavbar__Element__active MainNavbar__Element"
                  : "MainNavbar__Element"
              }
            >
              <span className="MainNavbar__Icon">
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
            </div>
          </Col>
          <Col className="px-0">
            <div
              id="projects"
              onClick={e => props.handleClick(e)}
              className={
                props.state.projects
                  ? "MainNavbar__Element__active MainNavbar__Element"
                  : "MainNavbar__Element"
              }
            >
              <span className="MainNavbar__Icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
            </div>
          </Col>
          <Col className="pl-0">
            <div
              id="contact"
              onClick={e => props.handleClick(e)}
              className={
                props.state.contact
                  ? "MainNavbar__Element__active MainNavbar__Element"
                  : "MainNavbar__Element"
              }
            >
              <span className="MainNavbar__Icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
