import ExpenseItem from "./components/ExpenseItem";

function App() {
  // 일반적인 javascript로 P태그를 추가하는 방법
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible!!';
  // document.getElementById('root').appendChild(para);

  const expenses = [
    {id: 'e1', title: 'KB 다이렉트 자동차 보험', amount: 50, date: new Date(2023, 10, 18)},
    {id: 'e2', title: '삼성 가전 이사 비용', amount: 100, date: new Date(2023, 10, 18)},
    {id: 'e3', title: '이사 비용', amount: 120, date: new Date(2023, 10, 18)},
    {id: 'e4', title: '식비', amount: 5, date: new Date(2023, 10, 18)}
  ];

  return (<div>
    <h2>Let's get started!</h2>
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
    <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
    <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
    <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
  </div>);
}

export default App;
