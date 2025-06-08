import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        color: "#fff",
        padding: "30px 0",
        marginTop: "auto",
      }}
    >
      <Container>
        <Row className="text-center">
          <Col>
            <p style={{ marginBottom: "10px", fontSize: "18px" }}>
              © {new Date().getFullYear()} Muttu Karani. All Rights Reserved.
            </p>
            <div style={{ fontSize: "20px" }}>
              <a
                href="https://github.com/muttukarani"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", margin: "0 15px" }}
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/muttukarani"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", margin: "0 15px" }}
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:muttukarani@gmail.com"
                style={{ color: "#fff", margin: "0 15px" }}
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
