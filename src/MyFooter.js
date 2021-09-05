import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GitLogo from "./resources/github-logo.svg";
import TwitterLogo from "./resources/twitter-logo.svg";
import LinkedInLogo from "./resources/linkedin-logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

class MyNav extends React.Component {
  render() {
    return (
      <div>
        <Row className="justify-content-center">
          <Col className="text-center" xs={3}>
            <a href="https://github.com/matthewcotton">
              <Image className="social-logo" src={GitLogo} alt="GitHub logo" />
            </a>
          </Col>
          <Col className="text-center" xs={3}>
            <a href="https://www.linkedin.com/in/matthew-cotton-ba1a3449/">
              <Image
                className="social-logo"
                src={LinkedInLogo}
                alt="LinkedIn logo"
              />
            </a>
          </Col>
          <Col className="text-center" xs={3}>
            <a href="https://twitter.com/Matt__Cotton">
              <Image
                className="social-logo"
                src={TwitterLogo}
                alt="Twitter logo"
              />
            </a>
            <br />
          </Col>
        </Row>
        
        <Row className='justify-content-center'>
          <Col xs={11}>
            <hr className="brd-white" />
          </Col>
        </Row>
        <Row className="justify-content-center foot-txt">
          <p className='sm-font'>
            Icons made by{" "}
            <a
              className="foot-link"
              href="https://www.flaticon.com/authors/dave-gandy"
              title="Dave Gandy"
            >
              Dave Gandy
            </a>{" "}
            from{" "}
            <a
              className="foot-link"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </p>
        </Row>
        <Row className="justify-content-center foot-txt">
          <p className='sm-font'>
            Icons made by{" "}
            <a
              className="foot-link"
              href="https://www.flaticon.com/authors/google"
              title="Google"
            >
              Google
            </a>{" "}
            from{" "}
            <a
              className="foot-link"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
          </p>
        </Row>
      </div>
    );
  }
}

export default MyNav;
