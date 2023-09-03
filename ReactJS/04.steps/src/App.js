import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const activeBtn = { backgroundColor: "#7950f2", color: "#fff" };
  const inActiveBtn = { backgroundColor: "#ededed", color: "#aaa" };

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={step === 1 ? inActiveBtn : activeBtn}
              onClick={handlePrevious}
              // disabled={step === 1 ? true : false}
            >
              Previous
            </button>
            <button
              style={step === 3 ? inActiveBtn : activeBtn}
              onClick={handleNext}
              // disabled={step === 3 ? true : false}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
