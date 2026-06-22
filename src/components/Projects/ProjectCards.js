import React from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
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

  const renderTooltip = (props) => (
    <Tooltip 
      id={`tooltip-${project.title.replace(/\s+/g, '-').toLowerCase()}`} 
      {...props} 
      style={{ ...props.style, zIndex: 9999 }}
    >
      {project.description}
    </Tooltip>
  );

  return (
    <Card className="project-card-view">
      <div
        style={{ overflow: "hidden", position: "relative", padding: "20px" }}
      >
        {project.isLiveEmbed ? (
          <div 
            onClick={handleClick} 
            style={{ cursor: "pointer" }}
            title={`View live demo of ${project.title}`}
          >
            <div style={project.embedContainerStyle}>
              <iframe
                src={project.embedUrl}
                title={project.title}
                style={{ ...project.embedIframeStyle, pointerEvents: "none" }}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        ) : (
          <Card.Img
            variant="top"
            src={project.imgPath}
            alt={project.title}
            loading="lazy"
          />
        )}
      </div>
      <Card.Body>
        <div>
          <Card.Title as="h3">{project.title}</Card.Title>
          <OverlayTrigger
            placement="top"
            delay={{ show: 150, hide: 150 }}
            overlay={renderTooltip}
          >
            <Card.Text className="text-start" style={{ cursor: "help" }}>
              {project.description}
            </Card.Text>
          </OverlayTrigger>
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
