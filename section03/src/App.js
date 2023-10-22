import Expenses from "./components/Expenses/Expenses";
import React from 'react';

function App() {
  // 과거의 사용 방법 (react로 부터 React를 import해야 함)
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement(Expense, {}));

  // 현재 사용 방법
  return <div><Expenses /></div>;

}

export default App;
