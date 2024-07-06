import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "@src/components/Projects/ProjectCards.js";
import ProjectShow from "@src/components/Projects/ProjectShow.js";
import { projects } from "@src/Projectdata";

function Projects({ toggleLoading }) {

  const [searchParams] = useSearchParams();
  const project = searchParams.get('name');

  useEffect(() => {
    toggleLoading(false);
  }, []);

  if (project) {
    return (<ProjectShow name={project} />);
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col key={index} md={6} xl={4} className="project-card">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
