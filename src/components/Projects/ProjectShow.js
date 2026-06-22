import React, { useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import useViewportAndFooterHeight from "../Hooks/useViewportAndFooterHeight";
import projectData, { projects } from "../../Projectdata.js";
import useSEO from "../Hooks/useSEO";

const fadeUpVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ProjectShow = ({ name }) => {
  const navigate = useNavigate();
  const { viewportHeight, footerHeight } =
    useViewportAndFooterHeight(".footer");

  const project = projectData.find((ele) => ele.name === name);
  const projectFront = projects.find((ele) => ele.name === name);

  useSEO({
    title: project ? `${project.title} Case Study | Vinay Poojary` : "Project Details | Vinay Poojary",
    description: project && projectFront ? `${project.title}: ${projectFront.description.substring(0, 140)}...` : "Detailed case study of software engineering projects by Vinay Poojary.",
    keywords: project ? `${project.title}, ${(project.technologies || []).join(", ")}, Case Study, Backend Developer` : "Project Case Study, Software Engineering"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!project) {
      navigate("/projects");
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const handleBack = () => {
    navigate("/projects");
  };

  return (
    <Container
      fluid
      as="main"
      className="project-show-container"
      style={{
        minHeight: `${viewportHeight - footerHeight}px`,
        background: "var(--bg-primary)",
      }}
    >
      <Container>
        <motion.div
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
        >
          <Row className="mt-2 mt-lg-3">
            {/* Left Column: Project Info (Sticky on desktop) */}
            <Col lg={5} className="mb-5 mb-lg-0 text-start">
              <div className="sticky-details">
                {/* Back Button */}
                <Button
                  variant="primary"
                  onClick={handleBack}
                  className="mb-5 mb-lg-4 d-inline-flex align-items-center gap-2"
                >
                  <AiOutlineArrowLeft /> Back to Projects
                </Button>

                {/* Project Header */}
                <h1 className="project-heading mb-2">
                  <span className="yellow">{project.title}</span>
                </h1>
                <p className="text-secondary fs-5 mb-4">{project.subTitle}</p>

                {/* Overview */}
                <div className="mb-4">
                  <h3
                    className="yellow mb-3 font-headings"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Project Overview
                  </h3>
                  <p
                    className="text-secondary"
                    style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
                  >
                    {projectFront.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="mt-4">
                  <h3
                    className="yellow mb-3 font-headings"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Technologies Used
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                    {(project.technologies || [
                      "React.js",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "Redux",
                      "Bootstrap",
                    ]).map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="d-flex flex-wrap gap-2 mt-4 pt-2">
                  {projectFront.ghLink && (
                    <Button
                      variant="primary"
                      href={projectFront.ghLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-flex align-items-center gap-2"
                      style={{ flexGrow: 1, maxWidth: "200px" }}
                    >
                      <BsGithub /> GitHub
                    </Button>
                  )}
                  {projectFront.demoLink && (
                    <Button
                      variant="primary"
                      href={projectFront.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-inline-flex align-items-center gap-2"
                      style={{ flexGrow: 1, maxWidth: "200px" }}
                    >
                      <CgWebsite /> Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Col>

            {/* Right Column: Screenshot Gallery or Live Embed */}
            <Col lg={7} className="text-start">
              {project.isLiveEmbed ? (
                <div>
                  <h3
                    className="yellow mb-4 font-headings"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Interactive Live Preview
                  </h3>
                  <div className="gallery-item-wrapper mb-5">
                    <div className="browser-mockup">
                      <div className="browser-header">
                        <div className="browser-dots">
                          <span className="browser-dot browser-dot-red"></span>
                          <span className="browser-dot browser-dot-yellow"></span>
                          <span className="browser-dot browser-dot-green"></span>
                        </div>
                        <div className="browser-address-bar">
                          {project.name}.app/login
                        </div>
                      </div>
                      <div style={{ position: "relative", overflow: "hidden" }}>
                        <iframe
                          src={project.embedUrl}
                          title={project.title}
                          style={{
                            width: "100%",
                            height: "550px",
                            border: "none",
                            background: "#0c0c0d",
                          }}
                          allowFullScreen
                        />
                      </div>
                    </div>
                    <p
                      className="text-muted mt-3 text-center"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Interact with the live application directly above, or click
                      "Live Demo" to view in full screen.
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3
                    className="yellow mb-4 font-headings d-lg-none"
                    style={{ fontSize: "1.25rem" }}
                  >
                    Gallery &amp; Screenshots
                  </h3>
                  <div className="gallery-list">
                    {project.data.map((item, index) => (
                      <div key={index} className="gallery-item-wrapper mb-5">
                        <div className="browser-mockup">
                          <div className="browser-header">
                            <div className="browser-dots">
                              <span className="browser-dot browser-dot-red"></span>
                              <span className="browser-dot browser-dot-yellow"></span>
                              <span className="browser-dot browser-dot-green"></span>
                            </div>
                            <div className="browser-address-bar">
                              {project.name}.app/screen_{index + 1}
                            </div>
                          </div>
                          <div style={{ position: "relative", overflow: "hidden" }}>
                            <img
                              className="w-100 img-fluid"
                              src={item.imgSrc}
                              alt={`Project screenshot ${index + 1}`}
                              loading="lazy"
                            />
                          </div>
                        </div>
                        {item.desc && (
                          <p
                            className="text-muted mt-3 text-center"
                            style={{ fontSize: "0.9rem" }}
                          >
                            {item.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
};

export default ProjectShow;
