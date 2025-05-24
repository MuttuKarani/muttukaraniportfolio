import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/images/muttu.JPG";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

const Home = () => {
  return (
    <section
      id="home"
      name="home"
      className="section-spacing"
      style={{
        minHeight: "100vh",
        padding: "80px 0 40px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#f3d6c3",
      }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Hey, I'm</h1>
              <h2>
                <span style={{ color: "#ffb640", fontWeight: "bold" }}>
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
              <h5 className="mt-3">
                passionate about building modern web applications.
              </h5>
            </motion.div>
            <div className="mt-4 d-flex justify-content-center justify-content-md-start flex-wrap gap-3">
              <a href="#contact">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#5bc0eb", border: "none" }}
                >
                  Contact Me
                </button>
              </a>
              <Link to="/resume">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#5bc0eb", border: "none" }}
                >
                  View Resume
                </button>
              </Link>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="d-flex justify-content-center"
            >
              <Image
                src={myPhoto}
                alt="My Profile"
                roundedCircle
                fluid
                style={{
                  width: "280px",
                  height: "280px",
                  objectFit: "cover",
                  border: "5px solid #5bc0eb",
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
