import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBriefcase, FaSchool, FaGraduationCap } from 'react-icons/fa';

const timelineVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Journey = ({ toggleLoading }) => {
  useEffect(() => {
    if (toggleLoading) {
      toggleLoading(false);
    }
  }, [toggleLoading]);

  const timelineData = [
    {
      date: "Sep 2025 - Present",
      title: "Backend Developer",
      subtitle: "Pipex.Ai (Mumbai, Maharashtra)",
      desc: "Developing backend services for a B2B industrial marketplace. Contributed to SaaS, admin, and asynchronous worker service repositories. Contributed to CI/CD pipeline development, resolved critical security vulnerabilities, optimized build workflows reducing development build times by 70%, and improved API performance by 4-6x.",
      icon: <FaBriefcase />,
    },
    {
      date: "2024 - Present",
      title: "Master of Science, Computer Science",
      subtitle: "Mumbai University (Mumbai, India)",
      desc: "Currently pursuing a Master's in Computer Science to study advanced software engineering concepts.",
      icon: <FaGraduationCap />,
    },
    {
      date: "Nov 2024 - Apr 2025",
      title: "Full Stack Development Intern",
      subtitle: "Rthetapi (Remote)",
      desc: "Developed modular full-stack web applications using React, Node.js, and NestJS, implementing microservices-based APIs with PostgreSQL for scalable backend architecture.",
      icon: <FaBriefcase />,
    },
    {
      date: "Nov 2023 - Feb 2024",
      title: "Frontend Development Intern",
      subtitle: "AltissAdvance Tech Pvt. Ltd. (Mumbai, Maharashtra)",
      desc: "Developed UI components for a React-based SaaS platform, improving page responsiveness and load performance. Translated design mockups into production-ready code.",
      icon: <FaBriefcase />,
    },
    {
      date: "2023",
      title: "Bachelor of Science, Computer Science",
      subtitle: "SIWS College, Wadala (Mumbai, India)",
      desc: "Graduated with a Bachelor of Science (BSc) in Computer Science.",
      icon: <FaGraduationCap />,
    },
    {
      date: "2018 - 2020",
      title: "Completed Higher Secondary Education",
      subtitle: "Elphinstone College (Mumbai, India)",
      desc: "Completed HSC board studies with a focus on science and programming basics.",
      icon: <FaSchool />,
    },
  ];

  return (
    <Container fluid className="journey-section">
      <Container className="text-center">
        <h1 className="project-heading mb-2">
          My Professional <strong className="yellow">Journey</strong>
        </h1>
        <p className="text-secondary mb-5" style={{ fontSize: "1.1rem" }}>
          A chronological overview of my academic background, developer internships, and professional roles.
        </p>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={timelineVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Custom Dot Indicator */}
              <div className="timeline-dot d-flex align-items-center justify-content-center"></div>

              {/* Timeline Card */}
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title d-flex align-items-center gap-2">
                  <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                  {item.title}
                </h3>
                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                <p className="timeline-desc mb-0">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Journey;
