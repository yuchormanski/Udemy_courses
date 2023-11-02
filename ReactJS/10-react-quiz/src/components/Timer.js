import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  //   const mins =
  //     Math.floor(secondsRemaining / 60) < 10
  //       ? `0${Math.floor(secondsRemaining / 60)}`
  //       : Math.floor(secondsRemaining / 60);
  //   const secs =
  //     secondsRemaining % 60 < 10
  //       ? `0${secondsRemaining % 60}`
  //       : secondsRemaining % 60;
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
