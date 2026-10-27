import {  useState } from "react";
import { useQuestionsContext } from "../context/QuestionsContext";

interface FlashCardProps {}

const FlashCard = ({}: FlashCardProps) => {
  const { questions, questionIndex, setQuestionIndex, totalQuestions } = useQuestionsContext();
  const [isQuestion, setIsQuestion] = useState<boolean>(true);

  const handleShowQuestion = () => {
    setIsQuestion(!isQuestion);
  };

  const handlePreviousQuestion = () => {
    setQuestionIndex(questionIndex - 1);
  };

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[60vw] h-[60vh] p-2 border-2 rounded-[10px]">
      <div className="flex flex-col w-full h-full rounded-[10px] p-2 bg-[#f5f5f5] mb-2">
        <div className="flex justify-center items-center flex-1 ">
          {questions
            .map((questao, index) =>
              isQuestion ? (
                <p key={index} className="font-bold text-4xl">
                  {questao.pergunta}
                </p>
              ) : (
                <p key={index} className="text-3xl text-center">
                  {questao.resposta}
                </p>
              ),
            )
            .filter((_, index) => index === questionIndex)}
        </div>
      </div>
      <div className="flex justify-between w-full rounded-[10px] p-2 bg-[#f5f5f5] ">
        <button
          className="cursor-pointer disabled:text-[#f5f5f5] disabled:cursor-auto"
          onClick={handlePreviousQuestion}
          disabled={questionIndex === 0 && true}
        >
          &lt; Previous
        </button>
        <button className="cursor-pointer " onClick={handleShowQuestion}>
          <b>Show Answer</b>
        </button>
        <button
          className="cursor-pointer disabled:text-[#f5f5f5] disabled:cursor-auto"
          onClick={handleNextQuestion}
          disabled={questionIndex == totalQuestions-1 && true}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default FlashCard;
