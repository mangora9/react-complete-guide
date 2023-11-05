import React, {useContext, useEffect, useReducer, useRef, useState} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.value, isValid: action.value.includes('@')}
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')}
  }

  return {
    value: '', isValid: false,
  };
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.value, isValid: action.value.trim().length > 6}
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 6}
  }

  return {
    value: '', isValid: false,
  };
}

const Login = () => {
  const ctx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const {isValid: isValidEmail} = emailState;
  const {isValid: isValidPassword} = passwordState;

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`-> Checking form!!`);
      setFormIsValid(isValidEmail && isValidPassword);
    }, 300);
    return () => {
      console.log(`-> CleanUp`);
      clearTimeout(timeout);
    };
  }, [isValidEmail, isValidPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', value: event.target.value});
    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', value: event.target.value});
    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    } else if (!isValidEmail) {
      // email이 유효하지 않은 경우 focus
      emailInputRef.current.focus();
    } else {
      // password가 유효하지 않은 경우 focus
      passwordInputRef.current.focus();
    }
  };

  return (<Card className={classes.login}>
    <form onSubmit={submitHandler}>
      <Input
        ref={emailInputRef}
        id='email'
        label='E-Mail'
        type='email'
        isValid={isValidEmail}
        value={emailState.value}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
      />

      <Input
        ref={passwordInputRef}
        id='password'
        label='Password'
        type='password'
        isValid={isValidPassword}
        value={passwordState.value}
        onChange={passwordChangeHandler}
        onBlur={validatePasswordHandler}
      />
      <div className={classes.actions}>
        <Button type="submit" className={classes.btn}>
          Login
        </Button>
      </div>
    </form>
  </Card>);
};

export default Login;
