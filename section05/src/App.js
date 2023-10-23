import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from 'react';

const App = () => {
  const expenses = [
    {id: 'e1', title: 'KB 다이렉트 자동차 보험', amount: 50, date: new Date(2023, 10, 18)},
    {id: 'e2', title: '삼성 가전 이사 비용', amount: 100, date: new Date(2023, 10, 18)},
    {id: 'e3', title: '이사 비용', amount: 120, date: new Date(2023, 10, 18)},
    {id: 'e4', title: '식비', amount: 5, date: new Date(2023, 10, 18)}
  ];

  const addExpenseHandler = (expense) => {
    console.log(`-> expense in App.js`, expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );

}

export default App;
