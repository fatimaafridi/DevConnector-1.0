import * as actionTypes from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const registerSuccess = (state, payload) => {
  localStorage.setItem('token', payload.token);
  return {
    ...state,
    ...payload,
    isAuthenticated: true,
    loading: false,
  };
};

const registerFail = (state) => {
  localStorage.removeItem('token');
  return {
    ...state,
    token: null,
    isAuthenticated: false,
    loading: false,
  };
};

const userLoaded = (state, payload) => {
  return {
    ...state,
    isAuthenticated: true,
    user: payload,
    loading: false,
  };
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_LOADED:
      return userLoaded(state, action.payload);
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return registerSuccess(state, action.payload);
    case actionTypes.REGISTER_FAIL:
    case actionTypes.LOGOUT:
    case actionTypes.AUTH_ERROR:
    case actionTypes.LOGIN_FAIL:
    case actionTypes.ACCOUNT_DELETED:
      return registerFail(state);
    default:
      return state;
  }
}
