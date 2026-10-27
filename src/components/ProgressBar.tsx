import { useQuestionsContext } from "../context/QuestionsContext";

const ProgressBar = () => {
  const { totalQuestions, questionIndex } = useQuestionsContext();

  const progress = ((questionIndex + 1) * 100) / totalQuestions;

  return (
    <div className=" flex items-center justify-between w-[60vw] border-2 rounded-[10px] p-1">
      <div className="flex items-center  w-full h-full ">
        <span
          className={"bg-[#bfbfbf] p-1 rounded-[5px] h-full mr-1 transition-all duration-300"}
          style={{ width: `${progress}%` }}
        ></span>{" "}
        <p>{progress}%</p>
      </div>

      {progress < 100 && (
        <p className="w-[7vw] text-right">
          {questionIndex + 1} of {totalQuestions}
        </p>
      )}
    </div>
  );
};

export default ProgressBar;
