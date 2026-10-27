import { createContext, useContext, useState, type ReactNode } from "react";
import { Questions, type Question } from "../data/data";

interface QuestionsContextType {
  questions: Question[];
  totalQuestions: number;
  questionIndex: number;
  setQuestionIndex: (index: number) => void;
}

const QuestionsContext = createContext<QuestionsContextType | null>(null);

export function QuestionsProvider({ children }: { children: ReactNode }) {
  const [questions] = useState(Questions);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const totalQuestions = questions.length;

  return (
    <QuestionsContext.Provider
      value={{ questions, totalQuestions, questionIndex, setQuestionIndex }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export function useQuestionsContext() {
  const context = useContext(QuestionsContext);

  if (context === null)
    throw new Error(
      "useQuestionsContext must be used within a QuestionContext",
    );

  return context;
}
