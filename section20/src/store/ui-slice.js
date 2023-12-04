import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isVisibleCart: false,
  notification: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.isVisibleCart = !state.isVisibleCart;
    },
    showNotification(state, action) {
      const {
        status, title, message
      } = action.payload;

      state.notification = {
        status,
        title,
        message
      }
    }
  }
});

export const uiActions = uiSlice.actions;
export default uiSlice;