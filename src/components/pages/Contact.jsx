import React from "react";

import MapMe from "../Map";

import { Container, Row, Col, Input, FormGroup, Label, Form, Button } from "reactstrap";

export default function Contact() {
  return (
    <div className="Contact p-md-4">
      <Container>
      <h1 className="mt-5 mb-3">Where you can meet me for coffee</h1>
        <Row>
          <Col sm="12" md="4">
            <MapMe />
          </Col>
          <Col sm="12" md={{offset:1, size:7}} className="mt-4"><h3 className="text-muted">Or rather leave me your E-Mail!</h3>
          <form name="contact" method="POST" data-netlify="true">
          <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Your name" />
        </FormGroup>
          <FormGroup>
          <Label for="email">E-Mail</Label>
          <Input type="email" name="email" id="email" placeholder="Your E-Mail" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Please contact me regarding a Project proposal...</option>
            <option>How's the weather there?</option>
            <option>3</option>
          </Input>
        </FormGroup>
        <Button type="submit" className="mt-4 Contact__Button" block>Submit</Button>
        </form>
</Col>
        </Row>
      </Container>
    </div>
  );
}
