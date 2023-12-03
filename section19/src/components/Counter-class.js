import {Component} from "react";
import classes from "./Counter.module.css";
import {connect} from "react-redux";
import {ACTION_TYPE} from "../store/counter";

class CounterClass extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {
    console.log(`-> toggle`);
  }
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: ACTION_TYPE.increment}),
    decrement: () => dispatch({type: ACTION_TYPE.decrement}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
