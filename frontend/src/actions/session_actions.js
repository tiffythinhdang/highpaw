import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// We'll dispatch this when our user signs in
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// When our user is logged out, we will dispatch this action to set isAuthenticated to false
export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

// clear session errors
export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

// set token helper method
export const setAuthToken = (res, dispatch) => {
  // debugger 
  const { token } = res.data;
  localStorage.setItem('jwtToken', token);
  APIUtil.setAuthToken(token);
  const decoded = jwt_decode(token);
  dispatch(receiveCurrentUser(decoded))
};

// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
export const signup = user => dispatch => (
  APIUtil.signup(user).then(res => {
    setAuthToken(res, dispatch)
  }, err => (
    dispatch(receiveErrors(err.response.data))
  ))
);

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = user => dispatch => (
  APIUtil.login(user).then(res => {
    setAuthToken(res, dispatch)
  }, err => {
    dispatch(receiveErrors(err.response.data));
  })
);

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  APIUtil.setAuthToken(false);
  dispatch(logoutUser())
};