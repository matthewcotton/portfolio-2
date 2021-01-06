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
          <Col className="text-center">
            <h1 className="title" >About Me</h1>
            <hr className="brd-white" />
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="text-justify">
              Throughout 2020 I have been actively developing my computer
              science knowledge and web development skills. I am completing The
              Developer Academy’s Software Developer Bootcamp and have completed
              HarvardX “CS50 Introduction to Computer Science” course. This has
              given me some great experience using Javascript, React, Redux,
              C/C++, SQL, Flask, Jinja, HTML and CSS. Some of my portfolio
              projects demonstrate what I have done over this time.
            </p>
            <p className="text-justify">
              Prior to December 2020 I have worked in several electrical
              engineering roles in the automotive industry. This includes:
            </p>
            <ul>
              <li>
                Being a scrum master for a team developing consumer delivery
                related products,
              </li>
              <li>
                Designing the electrical architecture for a range of eBikes,
              </li>
              <li>Developing a trailer stability control algorithm,</li>
              <li>
                Delivering production electric power steering components for
                Land Rover and Jaguar products,
              </li>
              <li>And advanced development of self-driving features.</li>
            </ul>
            <p className="text-justify">
              Outside of work I am a keen parkrunner. The cancellation of which
              during the pandemic has been a huge loss to me and many others.
              Additionally, I enjoy a good pint of real ale and I am a member of
              CAMRA. Specifically, I have a strong interest in historic pubs.
              When I get the chance I enjoy watching Wrexham AFC.
            </p>
          </Col>
        </Row>
        <br />
      </div>
    );
  }
}

export default MyNav;
