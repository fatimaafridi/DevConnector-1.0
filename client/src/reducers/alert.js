import * as actionTypes from '../actions/types';

const initialState = [];

const removeAlert = (state, payload) => {
  return state.filter((alert) => alert.id !== payload);
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_ALERT:
      return [...state, action.payload];
    case actionTypes.REMOVE_ALERT:
      return removeAlert(state, action.payload);
    default:
      return state;
  }
}
