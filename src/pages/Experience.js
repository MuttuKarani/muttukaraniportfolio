import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Contact.css";

const Experience = () => {
  return (
    <section
      id="experience"
      name="experience"
      className="section-spacing"
      style={{
        minHeight: "100vh",
        padding: "60px 0",
        backgroundColor: "#f3d6c3",
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
              <strong>Mid-Level Developer</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              <ul>
                •Built and maintained modular, scalable UI components using
                React.js and Angular, improving code reusability and
                performance.
              </ul>
              <ul>
                •Collaborated with UX designers in Figma to implement
                responsive, cross-device user interfaces.
              </ul>{" "}
              <ul>
                •Optimized application performance across browsers and devices,
                reducing load time by 25%.
              </ul>{" "}
              <ul>
                •Integrated and tested RESTful APIs using Postman, ensuring
                smooth real-time data flow.
              </ul>{" "}
              <ul>
                •Refined Webpack configurations for faster builds and better
                runtime efficiency.
              </ul>
              <ul>
                {" "}
                •Lowered dev time and costs by 15% through reusable component
                architecture.
              </ul>{" "}
              <ul>
                •Led development of a B2B web app featuring automated invoicing
                and detailed reporting.
              </ul>{" "}
              <ul>
                {" "}
                •Exploring Flutter for cross-platform UI, utilizing AI tools to
                enhance widget efficiency.
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
