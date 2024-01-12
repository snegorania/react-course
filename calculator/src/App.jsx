import Header from "./components/Header";
import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setIserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleUserInput = (type, value) => {
    setIserInput((prev) => {
      return {
        ...prev,
        [type]: Number(value),
      };
    });
  };

  return (
    <>
      <Header />
      <main>
        <UserInput userInput={userInput} onChange={handleUserInput} />
        {userInput.duration <= 0 ? (
          <p className="center">Not valid input</p>
        ) : (
          <Results userInput={userInput} />
        )}
      </main>
    </>
  );
}

export default App;
