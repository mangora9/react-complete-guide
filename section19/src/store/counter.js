import {createSlice} from "@reduxjs/toolkit";

export const ACTION_TYPE = {
  increment: 'increment',
  increase: 'increase',
  decrement: 'decrement',
  toggle: 'toggle',
}

const initialCountState = {
  isShowCounter: true,
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCountState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggle(state) {
      state.isShowCounter = !state.isShowCounter;
    },
  }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === ACTION_TYPE.increment) {
//     return {
//       ...state,
//       counter: state.counter + 1
//     }
//   }
//
//   if (action.type === ACTION_TYPE.increase) {
//     return {
//       ...state,
//       counter: state.counter + (action.amount ?? 0)
//     }
//   }
//
//   if (action.type === ACTION_TYPE.decrement) {
//     return {
//       ...state,
//       counter: state.counter -1
//     };
//   }
//
//   if (action.type === ACTION_TYPE.toggle) {
//     return {
//       ...state,
//       isShowCounter: !state.isShowCounter,
//     }
//   }
//
//   return state
// }
// const store = createStore(counterReducer);