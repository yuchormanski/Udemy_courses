import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarsRating from "./StarRating.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function ExternalStars() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarsRating color="#FFA81E" maxRating={4} onSetRating={setMovieRating} />
//       <p>This movie was {movieRating} stars</p>
//     </div>
//   );
// }

root.render(
  <React.StrictMode>
    <App />
    {/* <StarsRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarsRating size={32} className={"test"} defaultRating={3} color="red" />
    <ExternalStars /> */}
  </React.StrictMode>
);
