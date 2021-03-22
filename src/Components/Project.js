import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import "../App.css";

export const Project = ({ currentProject }) => {
  return (
    <>
      <Row>
        <Col className="text-center" lg={6} md={8} xs={12}>
          <h3 className="proj-title">{currentProject.title}</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={8} xs={12}>
          <a href={currentProject.link}>
            <Image
              className="full-width"
              src={currentProject.img}
              alt={currentProject.imgAlt}
            />
          </a>
        </Col>
        <Col className="proj-txt">
          <p>{currentProject.description}</p>
          <Button variant="secondary" href={currentProject.repo}>
            GitHub Repo
          </Button>
        </Col>
      </Row>
      <br />
    </>
  );
};
