import * as actionTypes from './types';
import axios from 'axios';
import * as actionCreater from './index';
import setAuthToken from '../utility/setAuthToken';

//Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: actionTypes.USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.AUTH_ERROR,
    });
  }
};

//Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: actionTypes.REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        dispatch(actionCreater.setAlert(error.msg, 'danger'))
      );
    }
    dispatch({
      type: actionTypes.REGISTER_FAIL,
    });
  }
};

//Login User

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        dispatch(actionCreater.setAlert(error.msg, 'danger'))
      );
    }
    dispatch({
      type: actionTypes.LOGIN_FAIL,
    });
  }
};

//Logout / Clear profile

export const logout = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT,
  });
  dispatch({
    type: actionTypes.LOGOUT,
  });
};
