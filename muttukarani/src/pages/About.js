import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section
      id="about"
      name="about"
      style={{ minHeight: "100vh", padding: "60px 0" }}
    >
      <Container>
        <h2>About Me</h2>
        <p>
          I am a passionate frontend developer specializing in React.js and
          modern web technologies. I have experience building scalable web
          applications and enjoy creating user-friendly interfaces.
        </p>
      </Container>
    </section>
  );
};

export default About;
