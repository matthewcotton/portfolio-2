import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

class Project extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="text-center" lg={6} md={8} xs={12}>
            <h3 className="proj-title">{this.props.currentProject.title}</h3>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={8} xs={12}>
            <a href={this.props.currentProject.link}>
              <Image
                className="full-width"
                src={this.props.currentProject.img}
                alt={this.props.currentProject.imgAlt}
              />
            </a>
          </Col>
          <Col className="proj-txt">
            <p>{this.props.currentProject.description}</p>
            <Button variant="secondary" href={this.props.currentProject.repo}>
              GitHub Repo
            </Button>
          </Col>
        </Row>
        <br />
      </div>
    );
  }
}

export default Project;
