import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Imprint from "./pages/Imprint";
import DataProtection from "./pages/DataProtection";
import {Container, Row, Col} from 'reactstrap'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        { // <Route path="/" component={Home} />
      }
        <Route path="/imprint"  component={Imprint} />
        <Route path="/privacy" component={DataProtection} />
      </Switch>
      <Container><Row className="mb-3 justify-content-end"><Col sm="auto"><div className="text-right App__Text">©2019|<Link className="App__Links" to="/imprint">Legal Notice</Link>|<Link className="App__Links" to="/privacy">Privacy</Link> </div></Col></Row></Container>
    </div>
  );
}

export default App;
