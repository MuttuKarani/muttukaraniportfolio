import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa";
import { SiFlutter, SiApachenetbeanside } from "react-icons/si";
import "../styles/Contact.css";

const Skills = () => {
  const skills = [
    { icon: <FaReact size={50} color="#61DBFB" />, name: "React.js" },
    { icon: <FaAngular size={50} color="#dd1b16" />, name: "AngularJS" },
    { icon: <SiFlutter size={50} color="#02569B" />, name: "Flutter" },
    { icon: <FaJsSquare size={50} color="#F0DB4F" />, name: "JavaScript" },
    { icon: <FaHtml5 size={50} color="#e34c26" />, name: "HTML" },
    { icon: <FaCss3Alt size={50} color="#264de4" />, name: "CSS" },
    { icon: <FaGitAlt size={50} color="#F1502F" />, name: "Git" },
    { icon: <FaGithub size={50} color="#000" />, name: "GitHub" },
    { icon: <FaNodeJs size={50} color="#3C873A" />, name: "Node.js" },
    {
      icon: <SiApachenetbeanside size={50} color="#1B6AC6" />,
      name: "API Integration",
    },
  ];

  return (
    <section
      id="skills"
      name="skills"
      className="section-spacing"
      style={{
        minHeight: "100vh",
        padding: "60px 0",
        backgroundColor: "#f3d6c3",
      }}
    >
      <Container>
        <h2 className="mb-4">My Skills</h2>
        <h3>Here are some of the skills I’ve gained over the years:</h3>
        <Row className="text-center">
          {skills.map((skill, idx) => (
            <Col xs={6} md={3} key={idx} style={{ marginBottom: "30px" }}>
              <div>{skill.icon}</div>
              <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                {skill.name}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
