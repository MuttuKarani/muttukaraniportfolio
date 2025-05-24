import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Contact.css";

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="navbar navbar-custom "
      style={{ backgroundColor: "#f3d6c3" }}
    >
      <Container>
        <Navbar.Brand href="#">
          <b>Muttu Karani</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ScrollLink
              to="home"
              smooth
              duration={500}
              className="nav-link"
              offset={-70}
              style={{
                fontWeight: "700",
                cursor: "pointer",
                marginRight: "20px",
              }}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth
              duration={500}
              className="nav-link"
              offset={-70}
              style={{
                fontWeight: "700",
                cursor: "pointer",
                marginRight: "20px",
              }}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth
              duration={500}
              className="nav-link"
              offset={-70}
              style={{
                fontWeight: "700",
                cursor: "pointer",
                marginRight: "20px",
              }}
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth
              duration={500}
              className="nav-link"
              offset={-70}
              style={{
                fontWeight: "700",
                cursor: "pointer",
                marginRight: "20px",
              }}
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              className="nav-link"
              offset={-70}
              style={{
                fontWeight: "700",
                cursor: "pointer",
                marginRight: "20px",
              }}
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
