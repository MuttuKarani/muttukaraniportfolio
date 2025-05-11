import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/images/muttu.JPG";

const Home = () => {
  return (
    <section
      id="home"
      name="home"
      style={{
        minHeight: "100vh",
        padding: "60px 0",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Hello 👋</h1>
              <h2>
                I'm a{" "}
                <span style={{ color: "#007bff", fontWeight: "bold" }}>
                  <Typewriter
                    words={["Frontend Developer", "React.js Enthusiast"]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
              <p>passionate about building modern web applications.</p>
            </motion.div>
            <div style={{ marginTop: "20px" }}>
              <a href="#contact">
                <button className="btn btn-primary me-3">Contact Me</button>
              </a>
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-primary">View Resume</button>
              </a>
            </div>
          </Col>

          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Image
                src={myPhoto}
                alt="My Profile"
                roundedCircle
                fluid
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  // boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
