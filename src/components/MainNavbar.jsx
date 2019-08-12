import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function MainNavbar(props) {

  return (
    <div className="MainNavbar">
      <Container fluid className="m-0 p-0">
        <Row>
          <Col>
            <div id="resume"  onClick={(e) => props.handleClick(e)}className="MainNavbar__Element">
              <span className="MainNavbar__Icon">
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
            </div>
          </Col>
          <Col>
            <div id="projects" onClick={(e) => props.handleClick(e)} className="MainNavbar__Element">
              <span className="MainNavbar__Icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
            </div>
          </Col>
          <Col>
            <div id="contact" onClick={(e) => props.handleClick(e)} className="MainNavbar__Element">
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
