import React from 'react';
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartData = [
    { label: '1월', value: 0},
    { label: '2월', value: 0},
    { label: '3월', value: 0},
    { label: '4월', value: 0},
    { label: '5월', value: 0},
    { label: '6월', value: 0},
    { label: '7월', value: 0},
    { label: '8월', value: 0},
    { label: '9월', value: 0},
    { label: '10월', value: 0},
    { label: '11월', value: 0},
    { label: '12월', value: 0},
  ];

  // chart data 만들기
  props.expenses.forEach((expense) => {
    const month = expense.date.getMonth();
    chartData[month].value += expense.amount;
  });

  return (
    <Chart chartData={chartData}/>
  );
};

export default ExpensesChart;