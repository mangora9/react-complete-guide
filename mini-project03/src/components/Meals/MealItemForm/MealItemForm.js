import React, {useRef, useState} from 'react';
import classes from './MealItemForm.module.css';
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +(inputRef.current.value);

    if (isNaN(enteredAmount) || enteredAmount < 1 || enteredAmount > 5) {
      setIsValidAmount(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  }

  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}
    >
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!isValidAmount && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;