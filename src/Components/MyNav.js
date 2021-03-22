import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "../App.css";

export const MyNav = () => {
  return (
    <Navbar
      className="nav-bar"
      bg="dark"
      variant="dark"
      expand="md"
      sticky="top"
    >
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
};
