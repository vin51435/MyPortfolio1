import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import TechStack from "./TechStack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import ToolStack from "./ToolStack";

import useSEO from "../Hooks/useSEO";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function About({ toggleLoading }) {
  useEffect(() => {
    if (toggleLoading) {
      toggleLoading(false);
    }
  }, [toggleLoading]);

  useSEO({
    title: "About Vinay Poojary | Backend & Full-Stack Engineer",
    description: "Learn about Vinay Poojary's software engineering background, BSc/MSc Computer Science studies, work experience at Pipex.Ai, and proficiency in Java, NestJS, SQL, and DevOps tools.",
    keywords: "About Vinay Poojary, Backend Developer, Skills, Tech Stack, SIWS College, AltissAdvance, Pipex.Ai"
  });

  return (
    <Container fluid as="main" className="about-section">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <Container>
          <Row className="about-content-card align-items-center">
            <Col md={7}>
              <motion.h1 variants={fadeUpVariants} className="about-section-header">
                Know Who <strong className="yellow">I AM</strong>
              </motion.h1>
              <motion.div variants={fadeUpVariants}>
                <AboutCard />
              </motion.div>
            </Col>
            <Col md={5} className="about-img text-center mt-5 mt-md-0 d-none d-md-block">
              <motion.img
                variants={fadeUpVariants}
                src={laptopImg}
                alt="about illustration"
                className="img-fluid"
              />
            </Col>
          </Row>

          <Container as="section" className="mt-5 p-0">
            <motion.h2 variants={fadeUpVariants} className="about-section-header text-center mb-5" style={{ fontSize: "2rem" }}>
              Professional <strong className="yellow">Skillset</strong>
            </motion.h2>
            <motion.div variants={fadeUpVariants}>
              <TechStack />
            </motion.div>
          </Container>

          <Container as="section" className="mt-5 p-0">
            <motion.h2 variants={fadeUpVariants} className="about-section-header text-center mb-5" style={{ fontSize: "2rem" }}>
              <strong className="yellow">Tools</strong> I Use
            </motion.h2>
            <motion.div variants={fadeUpVariants}>
              <ToolStack />
            </motion.div>
          </Container>
        </Container>
      </motion.div>
    </Container>
  );
}

export default About;
