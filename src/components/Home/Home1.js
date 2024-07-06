import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Type from "@src/components/Home/Type.js";
import homeImg from '@src/Assets/home1.svg';
import { titleAni } from '@src/components/FramerAnimationConfig.js';

const content = (load) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: load ?? 0.5 },
  },
});

const Home1 = ({ load }) => {
  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div
        variants={content(load)}
        animate="animate"
        initial="initial"
      >
        <Container fluid className="home-section" id="home" style={{ zIndex: 2 }}>
          <Container className="home-content">
            <motion.div
              variants={titleAni}
            >
              <Row>
                <Col md={8} lg={7} className="home-header">
                  <h1 className="heading">
                    Hi There!
                  </h1>

                  <h1 className="heading-name">
                    <span className="heading-name-first">I Am</span>
                    <strong className="main-name"> Vinay Poojary</strong>
                  </h1>

                  <div style={{ padding: 50, textAlign: "left" }}>
                    <Type />
                  </div>
                </Col>

                <Col md={4} lg={5} className='home-main-img-container'>
                  <img src={homeImg} className="home-img-svg" alt="" />
                </Col>
              </Row>
            </motion.div>
          </Container>
        </Container>
      </motion.div>
    </motion.section>
  );
};

export default Home1; 