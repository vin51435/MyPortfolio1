import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import TechStack from "./TechStack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
import ToolStack from "./ToolStack";

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

  return (
    <Container fluid className="about-section">
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

          <div className="mt-5">
            <motion.h1 variants={fadeUpVariants} className="about-section-header text-center mb-5">
              Professional <strong className="yellow">Skillset</strong>
            </motion.h1>
            <motion.div variants={fadeUpVariants}>
              <TechStack />
            </motion.div>
          </div>

          <div className="mt-5">
            <motion.h1 variants={fadeUpVariants} className="about-section-header text-center mb-5">
              <strong className="yellow">Tools</strong> I Use
            </motion.h1>
            <motion.div variants={fadeUpVariants}>
              <ToolStack />
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </Container>
  );
}

export default About;
