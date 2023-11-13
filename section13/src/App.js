import React, {useCallback, useState} from 'react';
import './App.css';

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

const App = () => {
  const [isShowText, setIsShowText] = useState(false);
  const [isAllowToggle, setIsAllowToggle] = useState(false);
  console.log(`-> APP RUNNING`);

  const toggleParagraphHandler = useCallback(() => {
    if (isAllowToggle) {
      setIsShowText((prevState) => !prevState);
    }
  }, [isAllowToggle]);

  const allowToggleHandler = () => {
    setIsAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={isShowText}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Show Text!!</Button>
    </div>
  );
}

export default App;
