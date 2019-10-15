import * as UserAPIUtil from '../util/users_api_util';
import { startLoading } from './loading_actions';

export const RECEIVE_A_USER = "RECEIVE_A_USER";
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

// actions
export const receiveAUser = user => ({
  type: RECEIVE_A_USER,
  user
});

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearUserErrors = () => ({
  type: CLEAR_USER_ERRORS
});

// thunk actions
export const fetchAUser = (id) => dispatch => {
  dispatch(startLoading());
  return UserAPIUtil.fetchAUser(id)
    .then(user => dispatch(receiveAUser(user)))
    .catch(err => dispatch(receiveUserErrors(err.response.data)))
};

export const updateAUser = (data) => dispatch => {
  dispatch(startLoading());
  UserAPIUtil.updateAUser(data)
    .then(user => dispatch(receiveAUser(user)),
      err => dispatch(receiveUserErrors(err.response.data)))
};

export const fetchUserFromRequest = (requestId) => dispatch => {
  dispatch(startLoading());
  return UserAPIUtil.fetchUserFromRequest(requestId)
    .then(
      user => dispatch(receiveAUser(user))
    )
}
