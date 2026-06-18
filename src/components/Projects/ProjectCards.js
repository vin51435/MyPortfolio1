import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProjectCards({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (project.hosted) {
      window.open(project.demoLink, "_blank");
    } else {
      navigate(`/projects?name=${project.name}`);
    }
  };

  return (
    <Card className="project-card-view">
      <div
        style={{ overflow: "hidden", position: "relative", padding: "20px" }}
      >
        <Card.Img
          variant="top"
          src={project.imgPath}
          alt={project.title}
          loading="lazy"
        />
      </div>
      <Card.Body>
        <div>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text className="text-start">{project.description}</Card.Text>
        </div>
        <div className="d-flex gap-2 w-100 mt-3">
          {project.ghLink ? (
            <Button
              className="flex-grow-1"
              variant="primary"
              href={project.ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub /> &nbsp; GitHub
            </Button>
          ) : null}
          <Button
            className="flex-grow-1"
            variant="primary"
            onClick={handleClick}
          >
            <CgWebsite /> &nbsp; {project.hosted ? "Demo" : "Details"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
