import { useSelector, useDispatch} from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from "../store/counter";
// import {ACTION_TYPE} from "../store";


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const isShowCounter = useSelector(state => state.counter.isShowCounter);

  const incrementHandler = () => {
    // dispatch({ type: ACTION_TYPE.increment });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({type: ACTION_TYPE.increase, amount: 5});
    dispatch(counterActions.increase(10));
    // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  }

  const decrementHandler = () => {
    // dispatch({type: ACTION_TYPE.decrement});
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({type: ACTION_TYPE.toggle});
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
