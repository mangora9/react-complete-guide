import React from 'react';
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
  const className = `${classes.modal} ${props.className}`;
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClick}/>
      <Card className={className}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;