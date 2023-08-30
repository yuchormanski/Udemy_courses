import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
  return (
    <img
      src="https://pixabay.com/get/gb8d2029e72714ba4f4afcf24dd17a497cde45831f84aecafa292bbba475f8f9ff9c990022ec8472fd3872ab02d39146509a5f0b010b6ae9693253ad046df56d5fe51e87500a41b10251b332f7a66764a_640.jpg"
      alt=""
      width="442px"
    />
  );
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
      <div className="skill" style={{ backgroundColor: `${props.color}` }}>
        {props.name}
        <img src={props.img} alt="" width="25px" />
      </div>
    </div>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


