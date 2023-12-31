import { useQuiz } from "../context/QuizContex.jsx";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((q, i) => (
        <button
          className={`btn btn-option 
          ${i === answer ? "answer" : ""} 
          ${
            hasAnswered
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={q}
          disabled={hasAnswered}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: i,
            })
          }
        >
          {q}
        </button>
      ))}
    </div>
  );
}

export default Options;
