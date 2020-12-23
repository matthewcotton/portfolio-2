import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import CoverPic from "./resources/profile-pic.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Body from "react-bootstrap/ModalBody";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Matt Cotton - Intro</title>
        </Helmet>
        <Body>
          <Jumbotron fluid className="no-btm sm-top bg-dark">
            <Row>
              <Col className="text-center">
                <h1>Hi, my name is Matt Cotton.</h1>
              </Col>
            </Row>
            <hr className="brd-white" />
            <Row className="justify-content-center">
              <Col lg={4} md={5} xs={11}>
                <Image
                  className="full-width"
                  src={CoverPic}
                  alt="Photo of Matt Cotton in the woods during fall/autumn."
                />
              </Col>
              <Col className="lrg-font" lg={8} md={7} xs={12}>
                <p>I am a web developer living in Sheffield, UK.</p>
                <p>
                  My background includes 8 years as an electrical engineer in
                  the automotive industry at both Jaguar Land Rover and General
                  Motors (Canada) and a MEng in Aerospace engineering from The
                  University of Sheffield.
                </p>
                <p>
                  To see a selection of my work, visit the{" "}
                  <b>
                    <Link className="txt-light" to="/projects">
                      projects
                    </Link>
                  </b>{" "}
                  page.{" "}
                </p>
              </Col>
            </Row>
          </Jumbotron>
        </Body>
      </div>
    );
  }
}

export default Home;
