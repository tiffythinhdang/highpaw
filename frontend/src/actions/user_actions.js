
import * as UserAPIUtil from '../util/users_api_util';

export const RECEIVE_A_USER = "RECEIVE_A_USER";

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

// actions
export const receiveAUser = user => ({
  type: RECEIVE_A_USER,
  user
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearUserErrors = () => ({
  type: CLEAR_USER_ERRORS
});

// thunk actions
export const fetchAUser = (id) => dispatch => (
  UserAPIUtil.fetchAUser(id)
    .then(user => dispatch(receiveAUser(user)))
    .catch(err => dispatch(receiveUserErrors(err.response.data)))
);

export const updateAUser = (data) => dispatch => (
  UserAPIUtil.updateAUser(data)
    .then(user => dispatch(receiveAUser(user)),
      err => dispatch(receiveUserErrors(err.response.data)))
);
