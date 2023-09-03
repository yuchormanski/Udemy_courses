import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [isNow, setIsNow] = useState(0);

  const d = new Date();
  const now = d.toDateString();

  return (
    <div className="App">
      <Steps />
      <Counter />
      {isNow === 0 ? (
        <p>Today is {now}</p>
      ) : count > 0 ? (
        <p>
          {count} days from today is {returnDate()}
        </p>
      ) : (
        <p>
          {count} days ago was {returnDate()}
        </p>
      )}
    </div>
  );

  function Steps() {
    return (
      <div>
        <button onClick={decreaseStepHandler}>-</button>
        Step: {step}
        <button onClick={increaseStepHandler}>+</button>
      </div>
    );
  }

  function Counter() {
    return (
      <div>
        <button onClick={decreaseCountHandler}>-</button>
        Count: {count}
        <button onClick={increaseCountHandler}>+</button>
      </div>
    );
  }

  function decreaseStepHandler() {
    if (step > 1) setStep((s) => s - 1);
  }

  function increaseStepHandler() {
    setStep((s) => s + 1);
  }

  function decreaseCountHandler() {
    setCount((c) => c - step);
    setIsNow((n) => n - step);
  }

  function increaseCountHandler() {
    setCount((c) => c + step);
    setIsNow((n) => n + step);
  }

  function returnDate() {
    const date = new Date();
    count > 0
      ? date.setDate(date.getDate() + count)
      : date.setDate(date.getDate() - Math.abs(count));

    const newD = date;
    return newD.toDateString();
  }
}

export default App;
