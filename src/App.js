import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { MyFooter as Footer, MyNav as Nav } from "./Components";
import { Home, Projects, About } from "./Pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Container>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <div>
                <h1>Page not found.</h1>
              </div>
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
