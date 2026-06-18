import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiGitlab,
  SiJenkins,
} from "react-icons/si";

function ToolStack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiGitlab />, name: "GitLab" },
    { icon: <SiJenkins />, name: "Jenkins" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <div className="tech-stack-grid">
      {tools.map((item, index) => (
        <div key={index} className="tech-icons" title={item.name}>
          {item.icon}
          <span className="tech-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default ToolStack;
