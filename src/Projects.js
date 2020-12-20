import React from "react";
import Helmet from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "./Project";
import FaceBuck from "./resources/facebuck-screenshot.PNG";
import PubAdventure from "./resources/text-adventure-screenshot.PNG";
import WhitchurchQuiz from "./resources/whitchurch-quiz-screenshot.PNG";
import Calculator from "./resources/calculator-screenshot.PNG";
import Cats from "./resources/foster-cats-screenshot.PNG";
import Cipher from "./resources/cipher-screenshot.PNG";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "FaceBuck",
          link: "https://matthewcotton.github.io/social-site/#/",
          img: FaceBuck,
          imgAlt: "FaceBuck screenshot",
          description: "A React based social media site.",
        },
        {
          title: "React Calculator",
          link: "https://matthewcotton.github.io/react-calculator/",
          img: Calculator,
          imgAlt: "React calculator screenshot",
          description: "A calculator built using React.",
        },
        {
          title: "Any Excuse for a Pub Adventure",
          link: "https://matthewcotton.github.io/oop-text-adventure/",
          img: PubAdventure,
          imgAlt: "Any excuse for a pub adventure screenshot",
          description:
            "A text-based adventure game based on exploring a pub based in Sheffield. Built using JavaScript.",
        },
        {
          title: "Whitchurch Quiz",
          link: "https://matthewcotton.github.io/js-quiz/",
          img: WhitchurchQuiz,
          imgAlt: "Whitchurch quiz screenshot",
          description:
            "A quiz about my hometown (Whitchurch, Shropshire). Built using JavaScript.",
        },
        {
          title: "Jenny & Matt's Foster Cats",
          link: "https://matthewcotton.github.io/hobby-site/index.html",
          img: Cats,
          imgAlt: "Jenny & Matt's foster cats' screenshot",
          description:
            "Over the last 3 years Jenny and I have been a foster home for eight of Toronto Cat Rescue's cats. This site includes a brief description of each cat and a selection of photos.",
        },
        {
          title: "Caesar Cipher",
          link: "https://matthewcotton.github.io/ceaser-cipher/",
          img: Cipher,
          imgAlt: "Caesar cipher screenshot",
          description:
            "A site that will encode and decode a string of text with the given keys.",
        },
      ],
    };
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
          <title>Projects</title>
        </Helmet>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1>Projects</h1>
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
