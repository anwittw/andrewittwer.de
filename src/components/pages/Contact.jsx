import React from "react";

import MapMe from "../Map";
import ContactForm from "../ContactForm";

import { Container, Row, Col } from "reactstrap";

export default function Contact() {
  return (
    <div className="Contact p-md-4">
      <Container>
        <h1 className="mt-5 mb-3">Here you can meet me for coffee</h1>
        <Row>
          <Col sm="12" md="4">
            <MapMe />
          </Col>
          <Col sm="12" md={{ offset: 1, size: 7 }} className="mt-4">
            <h3 className="Contact__SubHeading">Or rather leave me your mail here!</h3>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
