import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import TechStack from "@src/components/About/TechStack";
import AboutCard from "@src/components/About/AboutCard";
import laptopImg from "@src/Assets/about.svg";
import ToolStack from "@src/components/About/ToolStack";
import { titleAni, subContentAni } from '@src/components/FramerAnimationConfig.js';

const content = (load) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: load ? 2.8 : 0 },
  },
});

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
          >
            <Container fluid='lg'>
              <Row
                className="about-content-card">
                <Col
                  md={7}
                >
                  <motion.h1
                    variants={titleAni}
                  >
                    <h1 className="about-section-header" >
                      Know Who <strong className="yellow">I AM</strong>
                    </h1>
                  </motion.h1>
                  <motion.div
                    variants={subContentAni}
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
                variants={titleAni}
              >
                <h1 className="about-section-header">
                  Professional <strong className="yellow">Skillset </strong>
                </h1>
              </motion.h1>
              <motion.div
                variants={subContentAni}
              >
                <TechStack />
              </motion.div>
              <motion.h1
                variants={titleAni}
              >
                <h1 className="about-section-header">
                  <strong className="yellow">Tools</strong> I use
                </h1>
              </motion.h1>
              <motion.div
                variants={subContentAni}
              >
                <ToolStack />
              </motion.div>
            </Container>
          </motion.div>}
      </motion.section>
    </Container>
  );
}

export default About;
