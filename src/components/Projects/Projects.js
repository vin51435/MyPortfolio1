import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects({ toggleLoading }) {
  useEffect(() => {
    toggleLoading(false);
  }, []);

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://res.cloudinary.com/dwutvtryh/image/upload/v1720076856/portfolio%201/ProjectImg/moview.png'}
              isBlog={false}
              title="Moview"
              description="Moview is your ultimate destination for discovering the latest in movies and TV shows. The platform provides details about new releases, including ratings, cast information, and trailers. With sections highlighting popular, trending, and top-rated content, users can easily find what’s hot in the entertainment world."
              ghLink="https://github.com/vin51435/Moview"
              demoLink="https://moview-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://res.cloudinary.com/dwutvtryh/image/upload/v1720076855/portfolio%201/ProjectImg/foodAlls.png'}
              isBlog={false}
              title="Food Alls"
              description="
Food Alls is your go-to platform for discovering and sharing local food stalls. Explore a variety of stalls, read reviews, and contribute by adding your favorites. Whether you're a food enthusiast or a stall owner, Food Alls connects you with the best street food options available. Start your culinary adventure today!"
              ghLink="https://github.com/vin51435/FoodAlls"
              demoLink="https://food-alls.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://res.cloudinary.com/dwutvtryh/image/upload/v1720076855/portfolio%201/ProjectImg/dashboard.png'}
              isBlog={false}
              title="Front-end Showcase"
              description="This front-end dashboard showcases my skills in creating dynamic user interfaces with modern web technologies. It includes sections for product management, customer tracking, income analytics, and promotional tools, providing key metrics like earnings, orders, balance, and total sales."
              ghLink="https://github.com/vin51435/Dashboard-FrontPage-UsingReact"
              demoLink="https://dashboard-front-page-using-react.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://res.cloudinary.com/dwutvtryh/image/upload/v1720076855/portfolio%201/ProjectImg/cmpro.png'}
              isBlog={false}
              title="College Management System (incomplete)"
              description="
The College Management System streamlines academic and administrative processes with separate logins for teachers and students, ensuring secure access. It manages attendance, class schedules, and personal profiles, while aiding academic progress tracking through performance analysis."
              ghLink="https://github.com/vin51435/CollegeManagement"
              demoLink="https://college-management-psi.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
