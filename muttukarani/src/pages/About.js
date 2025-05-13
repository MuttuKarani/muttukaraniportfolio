import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section
      id="about"
      name="about"
      style={{
        minHeight: "100vh",
        padding: "60px 0",
        backgroundColor: "#fde74c ",
      }}
    >
      <Container>
        <h1 className="about " style={{ color: "#c3423f" }}>
          <b>About Me</b>
        </h1>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          Creative and results-driven Front-end Developer with 1.5+ years of
          experience building responsive, user-friendly, and high-performance
          web interfaces. Adept at turning design mockups into pixel-perfect,
          accessible pages using HTML, CSS, JavaScript, and modern frameworks
          like React.js and Angular. Strong in team-oriented collaboration,
          proactive communication, and problem-solving. Skilled in working
          closely with design and back-end teams to deliver seamless, engaging
          digital experiences. Passionate about continuous learning, optimizing
          performance, and crafting clean, maintainable code that brings
          creative ideas to life.
        </p>
      </Container>
    </section>
  );
};

export default About;
