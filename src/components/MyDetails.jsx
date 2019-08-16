import React from "react";

import { Container, Row, Col } from "reactstrap";

export default function MyDetails(props) {
  return (
    <div className="MyDetails">
      <Container>
        <Row>
          <Col className="text-center p-2 p-md-5" sm="12" md={{ size: 4 }}>
            <img src="/me.jpg" className="MyDetails__Img rounded" />
          </Col>
          <Col
            className="p-2 p-md-5 text-center"
            sm="12"
            md={{ size: 8, offset: 0 }}
          >
            <div className="MyDetails__Text">
              <p>
                Versatile allrounder with deep understanding of creating and
                managing digital business models. Successful experience in
                managing dynamic environments during scaling phase.
              </p>
              <p>
                Looking for small and mid-sized Software projects either as part
                of a bigger team or sole contractor.
              </p>
              <p>
                For further informations feel free to{" "}
                <span
                  onClick={() => {
                    props.handleClickPortfolio();
                  }}
                  className="MyDetails__CallToAction"
                >
                  take a look at my portfolio
                </span>{" "}
                or{" "}
                <span
                  onClick={() => {
                    props.handleClickContactMe();
                  }}
                  className="MyDetails__CallToAction"
                >
                  contact me directly
                </span>
                .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
