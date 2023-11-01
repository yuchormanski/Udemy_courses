function Progress({ index, qCount, points, maxPoints, answer }) {
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
