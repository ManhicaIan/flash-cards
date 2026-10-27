import FlashCard from "./components/FlashCard";
import ProgressBar from "./components/ProgressBar";
import { QuestionsProvider } from "./context/QuestionsContext";

const App = () => {

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen">
      <QuestionsProvider>
        <ProgressBar />
        <FlashCard />
      </QuestionsProvider>
    </div>
  );
};

export default App;
