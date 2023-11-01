import { useEffect, useReducer } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Question from "./Question.js";
import NextButton from "./NextButton.js";
import Progress from "./Progress.js";
import Finished from "./Finished.js";

const initialState = {
  questions: [],
  status: "loading", //'loading', 'error', 'ready', 'active', 'finished'
  index: 13, //index of questions
  answer: null, // index of the correct answer
  points: 0, //user achieved points
  highscore: 0, //user's highscore
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "dataIsLoading":
      return { ...state, status: "loading" };
    case "startQuiz":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "FinishedQuiz":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    default:
      throw new Error("Action is unknown!");
  }
}

export default function App() {
  const [{ questions, status, index, answer, points, highscore }, dispatch] =
    useReducer(reducer, initialState);

  const qCount = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(function () {
    const URL = "http://localhost:9000/questions";

    async function fetchQuestions() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen qCount={qCount} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              qCount={qCount}
              maxPoints={maxPoints}
              points={points}
              answer={answer}
            />
            <Question
              dispatch={dispatch}
              question={questions[index]}
              answer={answer}
              points={points}
            />
            <NextButton
              qCount={qCount}
              index={index}
              dispatch={dispatch}
              answer={answer}
              points={points}
            />
          </>
        )}
        {status === "finished" && (
          <Finished
            points={points}
            maxPoints={maxPoints}
            highscore={highscore}
          />
        )}
      </Main>
    </div>
  );
}
