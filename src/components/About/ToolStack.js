import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiGitlab,
  SiJenkins,
} from "react-icons/si";
import { ReactComponent as SiBruno } from "../../Assets/bruno.svg";

function ToolStack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiBruno />, name: "Bruno" },
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
