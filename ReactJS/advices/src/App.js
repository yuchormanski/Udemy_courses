import { useEffect, useState } from "react";

function App() {
  const [advice, newAdvice] = useState("");
  const [count, newCount] = useState(0);

  async function getAvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    newAdvice(data.slip.advice);
    newCount((c) => c + 1);
  }

  useEffect(function () {
    getAvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}
function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}

export default App;