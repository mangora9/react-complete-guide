const redux = require('redux');

const initialState = { counter: 0 };
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };

  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(`-> latestState`, latestState);
}

store.subscribe(counterSubscriber)

// action을 발송함
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});