import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards.js";
import ProjectShow from "./ProjectShow.js";
import { projects } from "../../Projectdata";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function Projects({ toggleLoading }) {
  const [searchParams] = useSearchParams();
  const project = searchParams.get('name');

  useEffect(() => {
    if (toggleLoading) {
      toggleLoading(false);
    }
  }, [toggleLoading]);

  if (project) {
    return <ProjectShow name={project} toggleLoading={toggleLoading} />;
  }

  return (
    <Container fluid className="project-section">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <Container>
          <motion.h1 variants={fadeUpVariants} className="project-heading text-center">
            My Recent <strong className="yellow">Works</strong>
          </motion.h1>
          <motion.p variants={fadeUpVariants} className="text-secondary text-center mb-5" style={{ fontSize: "1.1rem" }}>
            A curated showcase of applications I have built and collaborated on.
          </motion.p>
          <Row className="justify-content-center">
            {projects.map((proj, index) => (
              <Col key={index} md={6} lg={4} className="project-card d-flex">
                <motion.div variants={fadeUpVariants} className="w-100 d-flex">
                  <ProjectCard project={proj} />
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.div>
    </Container>
  );
}

export default Projects;
