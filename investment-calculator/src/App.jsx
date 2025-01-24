import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function updateUserInput(id, value) {
    console.log('updateUserInput', id);
    setUserInput(prevInput => ({
      ...prevInput,
      [id]: value
    }));
    handleCalculateResults();
  }

  function handleCalculateResults() {
    console.log('handleCalculateResults');
    setResults(calculateInvestmentResults(
      userInput.initialInvestment,
      userInput.annualInvestment,
      userInput.expectedReturn,
      userInput.duration
    ));
  }

  return (
    <>
      <Header />
      <main>
        <section id="user-input">
            <div className="input-group">
              <Input 
                id="initialInvestment" 
                label="Initial Investment" 
                onChange={updateUserInput} 
                value={userInput.initialInvestment}
              />
              <Input 
                id="annualInvestment" 
                label="Annual Investment" 
                onChange={updateUserInput} 
                value={userInput.annualInvestment}
              />
            </div>
            <div className="input-group">
              <Input 
                id="expectedReturn" 
                label="Expected Return" 
                onChange={updateUserInput}
                value={userInput.expectedReturn}
              />
              <Input 
                id="duration" 
                label="Duration" 
                onChange={updateUserInput}
                value={userInput.duration}
              />
            </div>
        </section>
        <section id="results">
          <Results results={results} />
        </section>
      </main>
    </>
  )
}

export default App
