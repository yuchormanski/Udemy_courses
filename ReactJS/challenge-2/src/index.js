import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { skills } from "./skills.js";

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
  return <img src="myPhoto2.jpg" alt="Nikolay" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <p>
        <h1>Nikolay Yuchormnski</h1>
      </p>
      <p>
        Readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum'
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div>
      <div className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>{getLevel(level)}</span>
        {/* <span>
          {level === "beginner" && "😒"}
          {level === "intermediate" && "🤞"}
          {level === "advanced" && "👌"}
        </span> */}
      </div>
    </div>
  );
}

function getLevel(level) {
  if (level === "advanced") {
    return "👌";
  } else if (level === "intermediate") {
    return "👍";
  } else if (level === "beginner") {
    return "🤔";
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
