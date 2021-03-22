import React from "react";
import Helmet from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "../Components/Project";
import projects from "../Resources/projectData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = projects;
  }

  renderProjects() {
    return this.state.projects.map((project) => (
      <Project currentProject={project} />
    ));
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Matt Cotton - Projects</title>
        </Helmet>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1 className="title">Projects</h1>
            <hr className="brd-white" />
          </Col>
        </Row>
        {this.renderProjects()}
        <br />
      </div>
    );
  }
}

export default Projects;
