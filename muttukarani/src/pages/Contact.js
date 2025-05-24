import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      name="contact"
      className="section-spacing"
      style={{
        minHeight: "100vh",
        padding: "60px 0",
        backgroundColor: "#f3d6c3",
      }}
    >
      <Container>
        <h1 className="text-start mb-4">
          <b>Let's connect</b>
        </h1>
        <h3 className="text-start mb-5">
          If you have any questions or would like to get in touch, feel free to
          contact me below:
        </h3>

        <Row>
          <Col md={5} className="d-flex flex-column justify-content-center">
            <Row className="mb-4">
              <Col xs={2}>
                <FaEnvelope size={24} />
              </Col>
              <Col>
                <a
                  href="mailto:muttukarani86@gmail.com"
                  className="text-decoration-none text-dark"
                >
                  muttukarani86@gmail.com
                </a>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col xs={2}>
                <FaLinkedin size={24} />
              </Col>
              <Col>
                <a
                  href="https://www.linkedin.com/in/muttu-karani-12085619b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  linkedin.com/in/muttu-karani
                </a>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col xs={2}>
                <FaGithub size={24} />
              </Col>
              <Col>
                <a
                  href="https://github.com/MuttuKarani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  github.com/MuttuKarani
                </a>
              </Col>
            </Row>
          </Col>
          <Col md={7}>
            <Card className="contact-form">
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

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    style={{ backgroundColor: " #5bc0eb" }}
                  >
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
