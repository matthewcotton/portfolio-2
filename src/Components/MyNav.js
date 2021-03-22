import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

class MyNav extends React.Component {
  render() {
    return (
      <Navbar className='nav-bar' bg="dark" variant="dark" expand="md" sticky="top">
        <Link to="/">
          <Navbar.Brand>Matt Cotton</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Text className="nav-link">
              <Link to="/">Intro</Link>
            </Navbar.Text>
            <Navbar.Text className="nav-link">
              <Link to="/about">About</Link>
            </Navbar.Text>
            <Navbar.Text className="nav-link">
              <Link to="/projects">Projects</Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNav;
