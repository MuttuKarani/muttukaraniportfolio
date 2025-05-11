import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const Skills = () => {
  return (
    <section
      id="skills"
      name="skills"
      style={{ minHeight: "100vh", padding: "60px 0" }}
    >
      <Container>
        <h2>My Skills</h2>
        <p>Here are some of the skills I’ve gained over the years:</p>
        <ListGroup>
          <ListGroup.Item>React.js</ListGroup.Item>
          <ListGroup.Item>JavaScript</ListGroup.Item>
          <ListGroup.Item>HTML & CSS</ListGroup.Item>
          <ListGroup.Item>Git & GitHub</ListGroup.Item>
          <ListGroup.Item>Node.js</ListGroup.Item>
          <ListGroup.Item>API Integration</ListGroup.Item>
        </ListGroup>
      </Container>
    </section>
  );
};

export default Skills;
