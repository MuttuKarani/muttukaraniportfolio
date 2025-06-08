import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLink, FaCode } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Happynenapu.com",
      description:
        "Developed a community-oriented website with integrated Google AdSense for monetization. Hosted the Inner Wheel District 317 Flipbook to showcase club events, reports, and publications in an interactive format. Ensured a responsive design and smooth user experience across devices.",
      links: [
        { label: "Visit Website", url: "https://happynenapu.com/" },
        {
          label: "View Flipbook",
          url: "https://happynenapu.com/assets/innerwheeldistrict317",
        },
      ],
    },
    {
      title: "B2B Web Application",
      description:
        "Built a full-featured business-to-business web application using React.js, Node.js, Express, and MongoDB. The app enables companies to manage invoices, profiles, analytics dashboards, and API-based integrations. Implemented JWT-based authentication and a responsive UI with Bootstrap.",
      link: "https://bbf.getsoochi.com",
    },
    {
      title: "Yeats Clinic",
      description:
        "Contributed to the Yeats Clinic healthcare web app by developing AngularJS modules for service booking, doctor listings, and responsive UI components. Refactored legacy code for better maintainability and implemented enhancements based on client requirements.",
      link: "https://yeatsclinicalweb.z13.web.core.windows.net/",
    },
    {
      title: "EV Dashboard",
      description:
        "A dashboard to visualize electric vehicle population data with D3.js and React. Switchable between Chart.js and D3.js charts.",
      link: "https://mkevdashboard.netlify.app",
    },
    {
      title: "Careocity (In Progress)",
      description:
        "Careocity is an innovative Flutter-based mobile application designed to support individuals and families who require Assisted Daily Services (ADLs). It empowers caregivers by offering streamlined scheduling, profile management, and communication tools, improving the quality of care and daily assistance.",
      link: "https://careocity.co/",
    },
  ];

  return (
    <section
      id="projects"
      name="projects"
      className="section-spacing"
      style={{
        minHeight: "100vh",
        padding: "60px 0",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      }}
    >
      <Container>
        <h2 className="mb-4">My Projects</h2>
        <h3>Here are some of the projects I’ve built:</h3>
        <Row className="mt-4">
          {projects.map((project, idx) => (
            <Col md={6} lg={4} className="mb-4" key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  className="h-100 shadow-sm border-0 text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center gap-2">
                      <FaCode />
                      {project.title}
                    </Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                      {project.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{
                      background: "transparent",
                      borderTop: "none",
                      textAlign: "center",
                    }}
                  >
                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                      {/* Handle multiple links if present */}
                      {project.links &&
                        project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-light btn-sm"
                          >
                            <FaLink className="me-1" />
                            {link.label}
                          </a>
                        ))}

                      {/* Handle single link */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-light btn-sm"
                        >
                          <FaLink className="me-1" />
                          View Project
                        </a>
                      )}
                    </div>
                  </Card.Footer>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
