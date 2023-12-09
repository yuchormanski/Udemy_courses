function NextButton({ dispatch, answer, index, qCount }) {
  if (answer === null) return null;

  if (index < qCount - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === qCount - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "FinishedQuiz" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
