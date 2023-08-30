import { useState } from "react";

function App() {
  const [advice, newAdvice] = useState("Get React Advice");
  const [count, newCount] = useState(0);

  async function getAvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
    newAdvice(data.slip.advice);
    newCount((c) => c + 1);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAvice}>Get advice</button>
      <p>
        You have read <strong>{count}</strong> pieces of advice
      </p>
    </div>
  );
}

export default App;
