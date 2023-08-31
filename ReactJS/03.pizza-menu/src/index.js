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
      {/* {numPizzas && (
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
          )} */}

      {/* with ternary operator */}
      {!!numPizzas ? (
        <React.Fragment>
          {/* or just <>*/}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            quod ea sapiente dolorem eos nulla quidem aliquam consectetur esse
            voluptate.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={uuid()} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please, come back later!</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : null}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  // const minutes = new Date().getMinutes();
  const openHour = 12;
  const closeHour = 22;
  // const currentTime = new Date().toLocaleTimeString();
  // const currentTime = `${hour}:${minutes}`;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {/* {isOpen
        ? `${currentTime} - We're currently open!`
        : `${currentTime} - We're closed!`} */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
