import logo from './assets/investment-calculator-logo.png';
import Header from "./components/Header/Header";
import UserForm from "./components/UserForm/UserForm";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import {useState} from "react";

const App = () => {
  const [userInput, setUserInput] = useState(null);
  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput?.currentSavings;
    const yearlyContribution = +userInput?.yearlyContribution;
    const expectedReturn = +userInput?.expectedReturn / 100;
    const duration = +userInput?.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  return (
    <div>
      <Header
        logo={logo}
        title={'Investment Calculator'}
      />
      <UserForm onCalculate={calculateHandler}/>
      {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput.currentSavings}/>}
    </div>
  );
}

export default App;
