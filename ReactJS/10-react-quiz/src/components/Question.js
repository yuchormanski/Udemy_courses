import { useQuiz } from "../context/QuizContex.jsx";
import Options from "./Options.js";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  // console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
