import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle:  e.target.value}
    // });
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value
    // });
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value
    // });
    setEnteredDate(e.target.value);
  };

  // const inputChangeHandler = (identifier, value) => {
  //   switch (identifier) {
  //     case 'title':
  //       setEnteredTitle(value);
  //       break;
  //     case 'date':
  //       setEnteredDate(value);
  //       break;
  //     case 'amount':
  //       setEnteredAmount(value);
  //       break;
  //     default:
  //   }
  // }

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle, amount: enteredAmount, date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData);
    // 초기화
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (<form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input
          type='text'
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input
          type='text'
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input
          type='date'
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>);
};

export default ExpenseForm;