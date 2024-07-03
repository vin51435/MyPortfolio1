import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
// import Github from "./Github";x
import TechStack from "@src/components/About/TechStack";
import AboutCard from "@src/components/About/AboutCard";
import laptopImg from "@src/Assets/about.svg";
import ToolStack from "@src/components/About/ToolStack";

const content = (load) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: load ? 2.8 : 0 },
  },
});

const title = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const subContent = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

function About({ load, toggleLoading }) {

  useEffect(() => {
    toggleLoading(false);
  }, []);

  return (
    <Container fluid className="about-section">
      <motion.section
        exit={{ opacity: 0 }}
      >
        {!load &&
          <motion.div
            variants={content(load)}
            animate="animate"
            initial="initial"
          // className="container px-5 py-24 mx-auto"
          >
            <Container fluid='lg'>
              <Row
                className="about-content-card">
                <Col
                  md={7}
                >
                  <motion.h1
                    variants={title}
                  // className="text-gray-700 body-font"
                  >
                    <h1 className="about-section-header" >
                      Know Who <strong className="yellow">I AM</strong>
                    </h1>
                  </motion.h1>
                  <motion.div
                    variants={subContent}
                  // className="text-gray-700 body-font"
                  >
                    <AboutCard />
                  </motion.div>
                </Col>
                <Col
                  md={5}
                  className="about-img"
                >
                  <img src={laptopImg} alt="about" className="" />
                </Col>
              </Row>
              <motion.h1
                variants={title}
              >
                <h1 className="about-section-header">
                  Professional <strong className="yellow">Skillset </strong>
                </h1>
              </motion.h1>
              <motion.div
                variants={subContent}
              >
                <TechStack />
              </motion.div>
              <motion.h1
                variants={title}
              // className="text-gray-700 body-font"
              >
                <h1 className="about-section-header">
                  <strong className="yellow">Tools</strong> I use
                </h1>
              </motion.h1>
              <motion.div
                variants={subContent}
              >
                <ToolStack />
              </motion.div>
              {/* <Github /> */}
            </Container>
          </motion.div>}
      </motion.section>
    </Container>
  );
}

export default About;
