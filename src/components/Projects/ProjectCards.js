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
      window.open(project.demoLink, '_blank');
    } else {
      navigate(`/projects?name=${project.name}`);
    }
  };
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={project.imgPath} alt="card-img" loading="lazy" style={{ minHeight: '162px' }} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text style={{ textAlign: "start" }}>
          {project.description}
        </Card.Text>
        <div>
          <Button className='w-100' variant="primary" href={project.ghLink} target="_blank">
            <BsGithub color="#4f000b" /> &nbsp;
            GitHub
          </Button>
          {"\n"}
          {"\n"}

          <Button className='w-100 mt-1' variant="primary" onClick={handleClick}>
            <CgWebsite color="#4f000b" /> &nbsp;
            {project.hosted ? "Demo" : 'Details'}
          </Button>
        </div>
      </Card.Body>
    </Card >
  );
}
export default ProjectCards;
