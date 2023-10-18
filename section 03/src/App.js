import ExpenseItem from "./components/ExpenseItem";
function App() {
  // 일반적인 javascript로 P태그를 추가하는 방법
  // const para = document.createElement('p');
  // para.textContent = 'This is also visible!!';
  // document.getElementById('root').appendChild(para);

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem/>
    </div>
  );
}

export default App;
