import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class MyNav extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md" fixed="top">
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
