import React, {useState} from 'react';
import classes from "./UserForm.module.css";

const INIT_USER_INPUT = {
  currentSavings: 1000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10,
}
const UserForm = (props) => {
  // const [currentSavings, setCurrentSavings] = useState(1000);
  // const [yearlyContribution, setYearlyContribution] = useState(1200);
  // const [expectedReturn, setExpectedReturn] = useState(7);
  // const [duration, setDuration] = useState(10);
  const [useInput, setUserInput] = useState(INIT_USER_INPUT);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(useInput);
  }

  const resetHandler = (e) => {
    e.preventDefault();
    setUserInput(INIT_USER_INPUT);
  }

  const inputChangeHandler = (target, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [target]: value,
      }
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler} onReset={resetHandler}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" value={useInput.currentSavings} onChange={(e) => inputChangeHandler('currentSavings', e.target.value)} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" value={useInput.yearlyContribution} onChange={(e) => inputChangeHandler('yearlyContribution', e.target.value)} />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={useInput.expectedReturn} onChange={(e) => inputChangeHandler('expectedReturn', e.target.value)} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={useInput.duration} onChange={(e) => inputChangeHandler('duration', e.target.value)} />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserForm;