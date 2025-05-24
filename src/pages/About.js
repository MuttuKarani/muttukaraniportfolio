import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Contact.css";

const About = () => {
  return (
    <section
      id="about"
      name="about"
      className="section-spacing"
      style={{
        minHeight: "100vh",
        padding: "60px 0",
        backgroundColor: "#f3d6c3",
      }}
    >
      <Container>
        <h1 className="about ">
          <b>About Me</b>
        </h1>
        <div
          className="paragraph"
          style={{
            textAlign: "justify",
          }}
        >
          <p>
            A creative Front-end Developer with 1.5+ years of hands-on
            experience building responsive, user-friendly, and
            performance-optimized web applications. I specialize in creating
            clean, scalable, and accessible user interfaces using modern web
            technologies such as HTML5, CSS3, JavaScript, React.js, AngularJS,
            Tailwind CSS, and Bootstrap.
          </p>
          <p>
            {" "}
            Over the past year and a half, I’ve had the opportunity to work on
            real-world projects where I developed reusable UI components,
            optimized web performance, and collaborated closely with UX
            designers and backend developers. I’ve also worked on integrating
            RESTful APIs and ensuring cross-browser compatibility — always
            aiming to deliver seamless user experiences.
          </p>
          <p>
            {" "}
            Currently, I’m expanding my knowledge in Flutter and TypeScript, and
            actively exploring tools like Jest, GitHub Actions, and Playwright
            to grow into a more complete, modern frontend engineer. I love
            working in agile, team-oriented environments where collaboration,
            creativity, and continuous improvement are part of the culture.
          </p>
          <p>
            {" "}
            I'm passionate about clean code, thoughtful UI/UX design, and
            staying updated with the latest web trends and technologies. Whether
            it's improving load times, contributing to design systems, or
            learning new frameworks, I’m always looking for opportunities to
            push my skills further and build impactful digital experiences.
          </p>
          <p>
            {" "}
            When I’m not coding, you’ll likely find me exploring photography,
            playing sports, or learning something new in the tech world.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;
