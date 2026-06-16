import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import useViewportAndFooterHeight from '../Hooks/useViewportAndFooterHeight';
import projectData, { projects } from '../../Projectdata.js';

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
  const { viewportHeight, footerHeight } = useViewportAndFooterHeight('.footer');

  const project = projectData.find(ele => ele.name === name);
  const projectFront = projects.find(ele => ele.name === name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  const handleBack = () => {
    navigate('/projects');
  };

  return (
    <Container
      fluid
      className="project-show-container"
      style={{ minHeight: `${viewportHeight - footerHeight}px`, background: 'var(--bg-primary)' }}
    >
      <Container className="text-start">
        <motion.div
          variants={fadeUpVariants}
          initial="initial"
          animate="animate"
        >
          {/* Back Button */}
          <Button variant="primary" onClick={handleBack} className="mb-4 d-inline-flex align-items-center gap-2">
            <AiOutlineArrowLeft /> Back to Projects
          </Button>

          {/* Project Header */}
          <h1 className="project-heading mb-2">
            <span className="yellow">{project.title}</span>
          </h1>
          <p className="text-secondary fs-5 mb-5">{project.subTitle}</p>

          {/* Overview */}
          <div className="mb-5">
            <h3 className="yellow mb-3 font-headings">Project Overview</h3>
            <p className="text-secondary" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
              {projectFront.description}
            </p>
          </div>

          {/* Screenshot Showcase */}
          <h3 className="yellow mb-4 font-headings">Gallery &amp; Screenshots</h3>
          <div className="project-card pt-0">
            {project.data.map((item, index) => (
              <div key={index} className={`mb-5`}>
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    className="w-100"
                    src={item.imgSrc}
                    alt={`Project screenshot ${index + 1}`}
                    loading="lazy"
                  />
                </div>
                {item.desc && <p className="text-muted mt-2 text-center">{item.desc}</p>}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Container>
  );
};

export default ProjectShow;