import React from 'react';
import Card from "../Card/Card";
import Button from "../Button/Button";
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}/>;
}

const ModalOverlay = (props) => {
  const className = `${classes.modal} ${props.className}`;
  return (
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
  )
}

const ErrorModal = props => {
  return (
    <>
      {
        ReactDOM.createPortal(
          <Backdrop onClick={props.onClick}/>,
          document.querySelector('#backdrop-root')
        )
      }
      {
        ReactDOM.createPortal(
          <ModalOverlay
            title={props.title}
            message={props.message}
            onClick={props.onClick}
          />,
          document.getElementById('overlay-root')
        )
      }
    </>
  );
};

export default ErrorModal;