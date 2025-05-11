import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      name="contact"
      style={{
        minHeight: "100vh",
        padding: "60px 0",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container>
        <h2 className="text-center mb-4">Let's connect</h2>
        <p className="text-center mb-5">
          If you have any questions or would like to get in touch, feel free to
          contact me below:
        </p>

        <Row>
          {/* Left side - Social Links */}
          <Col
            md={4}
            className="d-flex flex-column align-items-start justify-content-center"
          >
            <h5>Let's connect</h5>
            <a
              href="muttukarani86@gmail.com"
              className="mb-3 d-flex align-items-center text-decoration-none text-dark"
            >
              <FaEnvelope size={24} className="me-2" /> your-email@example.com
            </a>
            <a
              href="https://www.linkedin.com/in/muttu-karani-12085619b/"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 d-flex align-items-center text-decoration-none text-dark"
            >
              <FaLinkedin size={24} className="me-2" /> LinkedIn
            </a>
            <a
              href="https://github.com/MuttuKarani"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 d-flex align-items-center text-decoration-none text-dark"
            >
              <FaGithub size={24} className="me-2" /> GitHub
            </a>
          </Col>

          {/* Right side - Form in a Card */}
          <Col md={8}>
            <Card>
              <Card.Body>
                <Form action="https://formspree.io/f/xdkgdjya" method="POST">
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={4}
                      placeholder="Enter your message"
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
