import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from 'react';

const DUMMY_EXPENSES = [
  {id: 'e1', title: 'KB 다이렉트 자동차 보험', amount: 50, date: new Date(2023, 9, 18)},
  {id: 'e2', title: '삼성 가전 이사 비용', amount: 100, date: new Date(2023, 10, 18)},
  {id: 'e3', title: '이사 비용', amount: 120, date: new Date(2022, 8, 18)},
  {id: 'e4', title: '식비', amount: 5, date: new Date(2022, 9, 18)},
  {id: 'e5', title: '야식', amount: 20, date: new Date(2023, 3, 28)},
  {id: 'e6', title: '술', amount: 35, date: new Date(2023, 7, 10)}
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState, ]);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );

}

export default App;
