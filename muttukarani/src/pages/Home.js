import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/images/muttu.JPG";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      name="home"
      style={{
        minHeight: "100vh",
        padding: "100px 0 40px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fde74c",
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
              <h1>Hey, I'm</h1>
              <h2>
                <span style={{ color: "#c3423f", fontWeight: "bold" }}>
                  <Typewriter
                    words={[
                      "Muttu Karani",
                      "Frontend Developer",
                      "React.js Enthusiast",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
              <h5>passionate about building modern web applications.</h5>
            </motion.div>
            <div style={{ marginTop: "20px" }}>
              <a href="#contact">
                <button
                  className="btn btn-primary me-3"
                  style={{ backgroundColor: "#5bc0eb", border: "none" }}
                >
                  Contact Me
                </button>
              </a>

              <Link to="/resume">
                <button
                  className="btn btn-primary me-3"
                  style={{ backgroundColor: "#5bc0eb", border: "none" }}
                >
                  View Resume
                </button>
              </Link>
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
