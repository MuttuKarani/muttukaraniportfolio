import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLink, FaCode } from "react-icons/fa";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

const Projects = () => {
  const projects = [
    {
      title: "Happynenapu.com",
      description:
        "Developed a community-oriented website with integrated Google AdSense for monetization. Hosted the Inner Wheel District 317 Flipbook to showcase club events, reports, and publications in an interactive format.",
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
        "Full-featured B2B web application with invoices, dashboards, and integrations. Built using React, Node.js, Express, MongoDB.",
      link: "https://demo.soochiway.com/",
    },
    {
      title: "Yeats Clinic",
      description:
        "Contributed AngularJS modules for booking, doctor listings, and UI improvements.",
      link: "https://yeatsclinicalweb.z13.web.core.windows.net/",
    },
    {
      title: "EV Dashboard",
      description:
        "Dashboard for visualizing EV population data with D3.js & Chart.js.",
      link: "https://mkevdashboard.netlify.app",
    },
    {
      title: "Careocity (In Progress)",
      description:
        "Flutter-based mobile app to support families with Assisted Daily Services (ADLs).",
      link: "https://careocity.co/",
    },
  ];

  const [goToSlide, setGoToSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotate every 3s unless paused
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, projects.length]);

  // Prepare slides
  const slides = projects.map((project, index) => ({
    key: index,
    content: (
      <motion.div
        className="p-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div
          className="rounded-3 shadow-lg text-white p-4"
          style={{
            background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <h4 className="d-flex align-items-center gap-2">
            <FaCode /> {project.title}
          </h4>
          <p style={{ textAlign: "justify" }}>{project.description}</p>

          <div className="d-flex justify-content-center gap-2 flex-wrap">
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
        </div>
      </motion.div>
    ),
    onClick: () => setGoToSlide(index),
  }));

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
        <h2 className="mb-4 text-center">My Projects</h2>
        <h3 className="text-center">
          Here are some of the projects I’ve built:
        </h3>

        <div
          style={{ height: "500px", marginTop: "50px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={2}
            showNavigation={true}
            animationConfig={config.gentle}
          />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
