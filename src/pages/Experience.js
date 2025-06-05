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
                • Built and maintained modular, scalable UI components using
                React.js and AngularJS to improve code reusability and
                maintainability.
              </ul>
              <ul>
                • Collaborated with UX designers via Figma to implement
                responsive, cross-browser interfaces across desktop and mobile
                devices.
              </ul>{" "}
              <ul>
                {" "}
                • Integrated Google Ads for tracking and promotion, enhancing
                visibility and engagement of Flipbook content.
              </ul>
              <ul>
                • Optimized application performance and reduced load time by 25%
                through code splitting, efficient rendering, and build-time
                improvements.
              </ul>{" "}
              <ul>
                • Integrated and tested RESTful APIs using Postman, ensuring
                smooth real-time data flow and robust client-server
                communication.
              </ul>{" "}
              <ul>
                • Gained working knowledge of backend development using Node.js
                and Express.js to create scalable REST APIs for integration with
                frontend interfaces.
              </ul>
              <ul>
                {" "}
                • Refined Webpack and NPM configurations for faster builds and
                enhanced runtime performance; utilized Angular CLI and React
                scripts for streamlined development.
              </ul>{" "}
              <ul>
                • Reduced development time and costs by 15% by designing
                reusable UI component libraries and optimizing development
                workflows.
              </ul>{" "}
              <ul>
                {" "}
                • Led the frontend development of a B2B web application for
                automated invoicing and advanced reporting capabilities.
              </ul>
              <ul>
                {" "}
                • Currently exploring Flutter for cross-platform UI development,
                leveraging AI tools like ChatGPT to optimize widget design and
                implementation.
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
