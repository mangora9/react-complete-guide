import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {useState} from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  let filterInfoText = '';

  if (filteredYear === '2023') {
    filterInfoText = '2022';
  } else {
    filterInfoText = '2023';
  }
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <p>Data for years {filterInfoText} is hidden.</p>
      <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}/>
      <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}/>
      <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}/>
      <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}/>
    </Card>
  )
}

export default Expenses;