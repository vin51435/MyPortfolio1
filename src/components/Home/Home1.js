import React from 'react';
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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

const codeCardVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.3,
    },
  },
};

const scrollIndicatorVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 0.8,
    transition: {
      duration: 0.8,
      delay: 1.2,
    },
  },
};

const Home1 = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.querySelector('.home-introduction');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="initial"
      animate="animate"
      style={{ width: "100%", position: "relative" }}
    >
      <Row className="align-items-center" style={{ minHeight: "calc(100vh - 180px)" }}>
        <Col lg={7} className="home-header">
          <motion.div variants={fadeUpVariants} className="heading">
            GREETINGS_
          </motion.div>

          <motion.h1 variants={fadeUpVariants} className="heading-name">
            <span className="heading-name-first">I AM</span>
            <strong className="main-name">VINAY POOJARY</strong>
            <span className="sub-heading-role d-block mt-3">
              Backend Developer &amp; Full-Stack Engineer
            </span>
          </motion.h1>

          <motion.p variants={fadeUpVariants} className="mt-4 text-secondary" style={{ maxWidth: '480px', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Designing, building, and scaling high-performance backend systems, database queries, and CI/CD pipelines. Focused on optimizing B2B architectures and automating distributed background workloads.
          </motion.p>
        </Col>

        <Col lg={5} className="mt-5 mt-lg-0 home-main-img-container d-none d-lg-block">
          <motion.div variants={codeCardVariants} className="w-100">
            <div className="mock-editor-card">
              <div className="mock-editor-header">
                <div className="mock-dots">
                  <span className="mock-dot mock-dot-red"></span>
                  <span className="mock-dot mock-dot-yellow"></span>
                  <span className="mock-dot mock-dot-green"></span>
                </div>
                <div className="mock-filename">developer.json</div>
              </div>
              <div className="mock-editor-code">
                <pre>
                  <code>
{`{
  "name": "Vinay Poojary",
  "role": "Backend Developer",
  "experience": {
    "backend": ["Spring Boot", "NestJS", "Node.js"],
    "database": ["PostgreSQL", "MongoDB", "Redis"],
    "devops": ["Docker", "Jenkins", "AWS"]
  },
  "focus": "Performance & Security",
  "learning": "Distributed Systems"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>

      {/* Scroll Down Mouse Indicator */}
      <motion.div
        variants={scrollIndicatorVariants}
        animate={scrolled ? { opacity: 0, y: 20, transition: { duration: 0.3 } } : "animate"}
        className="scroll-indicator d-none d-lg-flex"
        onClick={handleScrollDown}
        style={{ pointerEvents: scrolled ? "none" : "auto" }}
      >
        <div className="mouse-scroll"></div>
      </motion.div>
    </motion.section>
  );
};

export default Home1;