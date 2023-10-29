import React, {useState} from 'react';
import Card from "../UI/Card/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const [error, setError] = useState(null);

  const changeUserNameHandler = (e) => {
    setEnteredUserName(e.target.value);
  }
  const changeUserAgeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  }
  const validation = () => {
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return false;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0).',
      });
      return false;
    }


    setError(null);
    return true;
  }

  const addUserHandler = (e) => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    props.onAddUser({
      name: enteredUserName,
      age: enteredUserAge,
      id: crypto.randomUUID(),
    });

    setEnteredUserName('');
    setEnteredUserAge('');
  }

  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='userName'>User Name</label>
          <input id='userName' type='text' onChange={changeUserNameHandler} value={enteredUserName}/>
          <label htmlFor='userAge'>Age (Years)</label>
          <input id='userAge' type='number' onChange={changeUserAgeHandler} value={enteredUserAge}/>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>

  );
};

export default AddUser;