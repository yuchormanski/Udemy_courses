function Finished({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🎖";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😁";
  if (percentage > 0 && percentage < 50) emoji = "🤔";
  else if (percentage === 0) emoji = "😭";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> Your scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)} %)
      </p>
      <p className="highscore">(Highscore is: {highscore} points)</p>

      <button
        className="btn btn-center"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart quiz!
      </button>
    </>
  );
}

export default Finished;
