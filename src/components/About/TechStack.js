import React from "react";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiExpress,
  SiBootstrap,
  SiTypescript,
  SiSpringboot,
  SiNestjs,
  SiRedux,
  SiTailwindcss,
  SiAntdesign,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiDocker,
  SiLinux,
  SiSpring,
  SiSocketdotio,
  SiAmazonaws,
  SiNginx,
  SiGithub,
  SiGitlab,
  SiJenkins,
} from "react-icons/si";
import {
  FaDatabase,
  FaExchangeAlt,
  FaProjectDiagram,
  FaServer,
  FaCodeBranch,
  FaSyncAlt,
} from "react-icons/fa";

function TechStack() {
  const categories = [
    {
      title: "Backend",
      skills: [
        { icon: <DiJava />, name: "Java" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <SiSpring />, name: "Spring MVC" },
        { icon: <SiSpring />, name: "Spring Data JPA" },
        { icon: <DiNodejs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiNestjs />, name: "NestJS" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiSocketdotio />, name: "WebSockets" },
        { icon: <FaExchangeAlt />, name: "REST APIs" },
      ],
    },
    {
      title: "Databases & Messaging",
      skills: [
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <DiMongodb />, name: "MongoDB" },
        { icon: <SiRedis />, name: "Redis" },
        { icon: <SiRabbitmq />, name: "RabbitMQ" },
        { icon: <FaProjectDiagram />, name: "BullMQ" },
        { icon: <FaDatabase />, name: "SQL" },
        { icon: <FaServer />, name: "Caching" },
        { icon: <FaProjectDiagram />, name: "Message Queues" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { icon: <SiAmazonaws />, name: "AWS" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiNginx />, name: "Nginx" },
        { icon: <FaProjectDiagram />, name: "Microservices" },
        { icon: <FaCodeBranch />, name: "CI/CD Pipelines" },
      ],
    },
    {
      title: "DevOps & Practices",
      skills: [
        { icon: <DiGit />, name: "Git" },
        { icon: <SiGithub />, name: "GitHub" },
        { icon: <SiGitlab />, name: "GitLab" },
        { icon: <SiJenkins />, name: "Jenkins" },
        { icon: <SiLinux />, name: "Linux" },
        { icon: <FaSyncAlt />, name: "Agile" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { icon: <DiReact />, name: "React" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiAntdesign />, name: "Ant Design" },
        { icon: <SiBootstrap />, name: "Bootstrap" },
      ],
    },
  ];

  return (
    <div className="tech-stack-container">
      {categories.map((category, catIdx) => (
        <div key={catIdx} className="tech-category mb-5">
          <h3 className="tech-category-title text-start mb-4 yellow" style={{ fontSize: "1.3rem", fontWeight: "600", borderLeft: "3px solid var(--accent)", paddingLeft: "10px" }}>
            {category.title}
          </h3>
          <div className="tech-stack-grid">
            {category.skills.map((item, index) => (
              <div key={index} className="tech-icons" title={item.name}>
                {item.icon}
                <span className="tech-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechStack;
