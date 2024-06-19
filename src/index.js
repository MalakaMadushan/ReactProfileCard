import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

const skills = [
  {
    skill: "React",
    level: "advanced",
    color: "pink",
  },
  {
    skill: "Laravel",
    level: "advanced",
    color: "orangered",
  },
  {
    skill: "HTML+CSS",
    level: "beginner",
    color: "yellow",
  },
  {
    skill: "Java Script",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "green",
  },
  {
    skill: "Git & GitHub",
    level: "beginner",
    color: "blue",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="imesha.JPG" alt="imesha Dilhani" />;
}

function Intro() {
  return (
    <div>
      <h1>Imesha Dilhani Muddarage</h1>
      <p>
        I am a skilled full-stack developer with experience in front-end and
        back-end technologies. I specialize in developing end-to-end
        applications that provide an optimal user experience
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map(skill =><Skill skill={skill.skill} level={skill.level} color={skill.color}/>)}
      {/* <Skill skill="React" emoji="💪" color="pink" />
      <Skill skill="Laravel" emoji="💪" color="orangered" />
      <Skill skill="HTML+CSS" emoji="✌" color="yellow" />
      <Skill skill="Java Script" emoji="👌" color="orange" />
      <Skill skill="Web Design" emoji="👌" color="green" />
      <Skill skill="Git & GitHub" emoji="✌" color="blue" /> */}
    </div>
  );
}

function Skill({skill, color, level}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill} </span>
      <span>
        {level === "beginner" && "✌"}
        {level === "intermediate" && "👌"}
        {level === "advanced" && "💪"}
        </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
