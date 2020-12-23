import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "./MyNav";
import Footer from './MyFooter';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Body from 'react-bootstrap/ModalBody'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div> 
      <Router> 
        <Body >
        <Nav />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
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
        </Body>
      </Router>
      </div>
    );
  }
}

export default App;
