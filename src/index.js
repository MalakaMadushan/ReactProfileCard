import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";



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
      <Skill skill="React" emoji="💪" color="pink" />
      <Skill skill="Laravel" emoji="💪" color="orangered" />
      <Skill skill="HTML+CSS" emoji="✌" color="yellow" />
      <Skill skill="Java Script" emoji="👌" color="orange" />
      <Skill skill="Web Design" emoji="👌" color="green" />
      <Skill skill="Git & GitHub" emoji="✌" color="blue" /> 
      
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill} </span>
      <span>{props.emoji}</span>
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
