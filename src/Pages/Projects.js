import React, { useState } from "react";
import Helmet from "react-helmet";
import { Row, Col } from "react-bootstrap";
import { Project } from "../Components";
import projectData from "../Resources/projectData";
import "../App.css";

export const Projects = () => {
  const [projects, setProjects] = useState(projectData);

  const renderProjects = () => {
    return projects.projectData.map((project) => (
      <Project currentProject={project} />
    ));
  };
  return (
    <>
      <Helmet>
        <title>Matt Cotton - Projects</title>
      </Helmet>
      <Row className="justify-content-center">
        <Col className="text-center">
          <h1 className="title">Projects</h1>
          <hr className="brd-white" />
        </Col>
      </Row>
      {renderProjects()}
      <br />
    </>
  );
};
