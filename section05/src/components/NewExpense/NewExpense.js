import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
  }
  const clickAddNewBtnHandler = () => {
    setIsEdit(true);
  }

  const clickCancelBtnHandler = () => {
    setIsEdit(false);
  }
  return (
    <div className='new-expense'>
      {!isEdit && <button onClick={clickAddNewBtnHandler}>Add New Expense</button>}
      {isEdit && <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={clickCancelBtnHandler}
      />
      }
    </div>
  );
};

export default NewExpense;