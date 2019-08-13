import React from 'react'

import { Container, Row, Col } from 'reactstrap'

export default function MyDetails(props) {
  
  return (
    <div className="MyDetails">
    <Row>
    <Col className=" MyDetails__Col d-flex justify-content-center align-items-center" md={{size: 4}}><img src="/me.jpg" className="MyDetails__Img rounded d-block" /></Col>
    <Col className="MyDetails__Col d-flex flex-column justify-content-center align-items-center " md={{size: 8, offset:0}}><div className="p-5"><p>Versatile allrounder with deep understanding of creating and managing digital business models. Successful experience in managing dynamic environments during scaling phase.</p><p>Looking for small and mid-sized Software projects either as part of a bigger team or sole contractor.</p>
    <p>For further informations feel free to <span onClick={() =>{props.handleClickPortfolio()}} className="MyDetails__CallToAction">take a look at my portfolio</span> or <span onClick={() =>{props.handleClickContactMe()}} className="MyDetails__CallToAction">contact me directly</span>.</p></div></Col>
    </Row>
    </div>
  )
}
