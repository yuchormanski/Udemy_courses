import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
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
        eadable content of a page when looking at its layout. The point of using
        Lorem Ipsum is that it has a more-or-less normal distribution of
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
      <Scill
        name="HTML /CSS"
        img="https://img.icons8.com/?size=512&id=FYJ9HNSqf_uK&format=png"
        color="red"
      />
      <Scill
        name="JavaScript"
        img="https://img.icons8.com/?size=512&id=32323&format=png"
        color="blue"
      />
      <Scill
        name="Angular"
        img="https://w7.pngwing.com/pngs/1014/365/png-transparent-angular-js-full-logo-tech-companies-thumbnail.png"
        color="yellow"
      />
      <Scill
        name="GitHub"
        img="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
        color="green"
      />
    </div>
  );
}

function Scill(props) {
  return (
    <div>
      {/* my way */}
      {/* <div className="skill" style={{ backgroundColor: `${props.color}` }}>  */}
      {/* Jonas way */}
      <div className="skill" style={{ backgroundColor: props.color }}>
        {props.name}
        <img src={props.img} alt="" width="25px" />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
