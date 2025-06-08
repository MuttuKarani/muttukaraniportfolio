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
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
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
            <ul style={{ textAlign: "justify" }}>
              <li>
                Built and maintained modular, scalable UI components using
                ReactJS and AngularJS to improve code reusability and
                maintainability.
              </li>
              <li>
                Implemented client-side routing with React Router for seamless
                navigation across application views.
              </li>
              <li>
                Collaborated with UX designers via Figma to implement
                responsive, cross-browser interfaces across desktop and mobile
                devices.
              </li>
              <li>
                Integrated Google Ads for tracking and promotion, enhancing
                visibility and engagement of Flipbook content.
              </li>
              <li>
                Optimized application performance and reduced load time by 25%
                through code splitting, efficient rendering, and build-time
                improvements.
              </li>
              <li>
                Integrated and tested RESTful APIs using Postman, ensuring
                smooth real-time data flow and robust client-server
                communication.
              </li>
              <li>
                Gained working knowledge of backend development using Node.js
                and Express.js to create scalable REST APIs for integration with
                frontend interfaces.
              </li>
              <li>
                Refined Webpack and NPM configurations for faster builds and
                enhanced runtime performance; utilized Angular CLI and React
                scripts for streamlined development.
              </li>
              <li>
                Reduced development time and costs by 15% by designing reusable
                UI component libraries and optimizing development workflows.
              </li>
              <li>
                Led the frontend development of a B2B web application for
                automated invoicing and advanced reporting capabilities.
              </li>
              <li>
                Built secure authentication flows using JWT-based token
                management in a B2B web application, enabling seamless login,
                session control, and role-based access.
              </li>
              <li>
                Deployed personal portfolio using Netlify, optimizing build and
                deployment pipelines for continuous updates and performance
                monitoring.
              </li>
              <li>
                Developed interactive data visualizations using D3.js by
                importing Excel data and displaying it in custom chart formats,
                enhancing data insights and user engagement.
              </li>
              <li>
                Currently exploring Flutter for cross-platform UI development,
                leveraging AI tools like ChatGPT to optimize widget design and
                implementation.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
