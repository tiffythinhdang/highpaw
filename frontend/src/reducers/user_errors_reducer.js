import {
  RECEIVE_USER_ERRORS,
  RECEIVE_A_USER,
  CLEAR_USER_ERRORS
} from '../actions/user_actions';

const _nullErrors = [];

const userErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;

    case RECEIVE_A_USER:
      return _nullErrors;

    case CLEAR_USER_ERRORS:
      return _nullErrors;

    default:
      return state;
  }
};

export default userErrorsReducer;