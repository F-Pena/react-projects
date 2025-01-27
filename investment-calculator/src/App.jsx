import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [results, setResults] = useState([]);
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function updateUserInput(id, value) {
    setUserInput((prevUserInput) => {
      const newUserInput = {
        ...prevUserInput,
        [id]: +value
      };
      
      // Calculate results with the updated input values
      setResults(calculateInvestmentResults(newUserInput));
      
      return newUserInput;
    });
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
                initialValue={userInput.initialInvestment}
              />
              <Input 
                id="annualInvestment" 
                label="Annual Investment" 
                onChange={updateUserInput} 
                initialValue={userInput.annualInvestment}
              />
            </div>
            <div className="input-group">
              <Input 
                id="expectedReturn" 
                label="Expected Return" 
                onChange={updateUserInput}
                initialValue={userInput.expectedReturn}
              />
              <Input 
                id="duration" 
                label="Duration" 
                onChange={updateUserInput}
                initialValue={userInput.duration}
              />
            </div>
        </section>
        { !inputIsValid && <p className="center">Please enter a valid duration greater than zero.</p> }
        { inputIsValid && <Results results={results} /> }
      </main>
    </>
  )
}

export default App
