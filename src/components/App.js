import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
