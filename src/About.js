import React from "react";
import Helmet from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class MyNav extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Matt Cotton - About</title>
        </Helmet>
        <Row className="justify-content-center">
          <Col>
            <h1>About Me</h1>
          </Col>
        </Row>
        <hr className="brd-white" />
        <Row>
          <Col>
            <p className="text-justify">
              The majority of my experience is as an electrical engineer but for
              some time now I have been re-focusing my career towards a
              software-based role. This year I have been actively developing my
              computer science knowledge and software developer skills. I am
              about to complete the HarvardX “CS50 Introduction to Computer
              Science” course and have been improving my JavaScript, C/C++, SQL,
              Flask, Jinja, HTML and CSS skills. This includes building some
              personal web development projects.
            </p>
            <p className="text-justify">
              8 years in automotive. Worked for Jaguar Land Rover and General
              Motors. Add details about projects.
            </p>
            <p className="text-justify">
              Outside of work I am a keen parkrunner. Also enjoy a good pint of
              real ale and I am a memeber of CAMRA. And a fan of the now much
              more famous Wrexham AFC.
            </p>
          </Col>
        </Row>
        <br />
      </div>
    );
  }
}

export default MyNav;
