import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { v4 as uuid } from "uuid";

import { pizzaData } from "./data.js";

// import Pizza from "./components/Pizza.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "32px",
  //   textTransform: "uppercase",
  // };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // my way
  const numPizzas = !!pizzas.length;
  // Jonas way
  // const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* my way */}
      {numPizzas && (
        // Jonas way
        // {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            // my way
            <Pizza pizzaObj={pizza} key={uuid()} />
            // Jonas way
            // <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  const openHour = 12;
  const closeHour = 23;
  // const currentTime = new Date().toLocaleTimeString();
  const currentTime = `${hour}:${minutes}`;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {/* {isOpen
        ? `${currentTime} - We're currently open!`
        : `${currentTime} - We're closed!`} */}
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
