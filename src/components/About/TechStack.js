import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
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
  SiDocker,
  SiRabbitmq,
  SiLinux,
} from "react-icons/si";

function TechStack() {
  const techs = [
    { icon: <DiJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiNestjs />, name: "NestJS" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiAntdesign />, name: "Ant Design" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiRabbitmq />, name: "RabbitMQ" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiLinux />, name: "Linux" },
  ];

  return (
    <div className="tech-stack-grid">
      {techs.map((item, index) => (
        <div key={index} className="tech-icons" title={item.name}>
          {item.icon}
          <span className="tech-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TechStack;
