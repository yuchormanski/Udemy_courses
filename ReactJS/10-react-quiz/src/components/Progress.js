import { useQuiz } from "../context/QuizContex.jsx";

function Progress() {
  const { index, answer, points, qCount, maxPoints } = useQuiz();
  return (
    <header className="progress">
      <progress max={qCount} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index}</strong> / {qCount}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
