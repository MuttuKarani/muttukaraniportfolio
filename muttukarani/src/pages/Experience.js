import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Experience = () => {
  return (
    <section
      id="experience"
      name="experience"
      style={{
        minHeight: "100vh",
        padding: "60px 0",
        backgroundColor: "#fde74c",
      }}
    >
      <Container>
        <h2 className="mb-4">Experience</h2>

        <Row className="mb-4">
          <Col md={4}>
            <strong>Dec 2023 - Present</strong>
          </Col>
          <Col md={8}>
            <h5>Springevening Pvt Ltd</h5>
            <p>
              <strong>Front-end Developer</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              Responsible for developing responsive user interfaces using
              React.js and integrating REST APIs. Collaborated with
              cross-functional teams to enhance application performance and user
              experience.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
