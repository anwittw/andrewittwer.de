import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Socials from "../Socials";

export default function Imprint() {
  return (
    <div className="Imprint">
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
            <Col className="pt-5 px-5" md={{ size: 12 }}>
              <h1 className="my-4">Legal Notice:</h1>
              <h4 className="my-3">Operator:</h4>
              <div className="pl-4">
                Andre Wittwer <br />
                Dr. Josef-Ammer Str. 30 <br />
                94513 Schönberg
              </div>
              <h4 className="my-3">Contact:</h4>{" "}
              <div className="pl-4">email: office at andrewittwer.de</div>{" "}
              <div className=" pl-4 my-5">
                VAT-ID according to § 27a UStG: DE323192214
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={{ offset: 2, size: 8 }}>
              <Link className="Imprint__Back__Link" to="/">
                <Button className="my-4 Imprint__Back" block>
                  Back
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
