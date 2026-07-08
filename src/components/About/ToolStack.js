import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { ReactComponent as SiBruno } from "../../Assets/bruno.svg";

function ToolStack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiBruno />, name: "Bruno" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <div className="tech-stack-grid">
      {tools.map((item, index) => (
        <div key={index} className="tech-icons">
          {item.icon}
          <span className="tech-name">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default ToolStack;
