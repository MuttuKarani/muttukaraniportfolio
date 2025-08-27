import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Contact.css"; // we’ll add underline styles here

const NavigationBar = () => {
  const navItems = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="navbar navbar-custom"
      style={{
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      }}
    >
      <Container>
        <Navbar.Brand href="#">
          <b>Muttu Karani</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item, idx) => (
              <ScrollLink
                key={idx}
                to={item}
                smooth
                duration={500}
                spy={true} // ✅ detect active section while scrolling
                offset={-70}
                activeClass="active-link" // ✅ custom class when active
                className="nav-link custom-link"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
