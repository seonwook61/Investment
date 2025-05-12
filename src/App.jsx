import Results from "./components/Results"
import UserInput from "./components/UserInput"

import { useState } from "react";


function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment : 100000,
        annualInvestment : 1200,
        expectedReturn : 6,
        duration : 10,
    });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
        setUserInput( (prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier] : +newValue,
            }
        });
  }

  return (
    <>
    <UserInput onChange={handleChange} userInput={userInput} />
    {!inputIsValid && <p>Please enter a duration greater than 0</p> }
    {inputIsValid && <Results input={userInput}/> }
    </>
  )
}

export default App
