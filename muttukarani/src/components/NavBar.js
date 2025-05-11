import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ScrollLink
              to="home"
              smooth
              duration={500}
              className="nav-link"
              offset={-70}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth
              duration={500}
              className="nav-link"
              offset={-70}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth
              duration={500}
              className="nav-link"
              offset={-70}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              className="nav-link"
              offset={-70}
            >
              Contact
            </ScrollLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
