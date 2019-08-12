import React, {useState} from 'react'
import { Route} from 'react-router-dom'


import { Container, Row, Col } from 'reactstrap'
import MyDetails from '../MyDetails'
import MainNavbar from '../MainNavbar'
import Socials from '../Socials'
import Resume from './Resume'
import Contact from './Contact'
import Projects from './Projects'



export default function Home() {

  const [stateActive, setstateActive] = useState({
    myDetails: true,
    resume: false,
    projects: false,
    contact: false,
  })
  
  function handleClick(e) {
    console.log(e.target.id)
    setstateActive({
      ...stateActive,
      myDetails: false,
      resume: false,
      projects: false,
      contact: false,
      [e.target.id]: true
    }
    )
  }


  return (
    <div className="Home">
    <pre>{JSON.stringify(stateActive, null, 2)}</pre>
      <Container className="my-5">
      <Row className="mb-4">
      <Col xs={{size:12}} md={{offset: 8, size:4}}> <Socials /> </Col>

      </Row>
      <div className="global-shadow">
      <Row><Col md={{size:12}}> <Route exact path="/" render={MyDetails} /></Col></Row>
      <Row><Col md={{size:12}}><MainNavbar state={stateActive} handleClick={handleClick} /></Col></Row>     
      <Row><Col md={{size:12}}> 
      { stateActive.resume && <Resume /> }
      { stateActive.projects && <Projects /> }
      { stateActive.contact && <Contact /> }
      </Col></Row>
      </div>
      </Container>
    </div>
  )
}
