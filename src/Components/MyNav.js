import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Nav, Navbar, Button } from "react-bootstrap";
import "../App.css";

export const MyNav = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Navbar
      className="nav-bar"
      bg="dark"
      variant="dark"
      expand="md"
      sticky="top"
    >
      <NavHashLink smooth to="/#top">
        <Navbar.Brand>Matt Cotton</Navbar.Brand>
      </NavHashLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="justify-content-end">
        <Nav className="mr-auto">
          <Navbar.Text className="nav-link">
            <NavHashLink smooth to="/#top">
              Intro
            </NavHashLink>
          </Navbar.Text>
          <Navbar.Text className="nav-link">
            <NavHashLink
              smooth
              to="/#about"
              scroll={(el) => scrollWithOffset(el)}
            >
              About
            </NavHashLink>
          </Navbar.Text>
          <Navbar.Text className="nav-link">
            <NavHashLink
              smooth
              to="/#projects"
              scroll={(el) => scrollWithOffset(el)}
            >
              Web Projects
            </NavHashLink>
          </Navbar.Text>
          <Navbar.Text className="nav-link">
            <Link to="/cv">CV</Link>
          </Navbar.Text>
        </Nav>
        <Nav>
          <Navbar.Text>
            <Button
              variant="outline-secondary"
              href="mailto:matthewneilcotton@gmail.com"
            >
              Have a chat
            </Button>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
