import {
  RECEIVE_DOG_ERRORS,
  CLEAR_DOG_ERRORS,
} from '../actions/dogs_action';

const _nullErrors = [];

const dogErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DOG_ERRORS:
      return action.errors;
    case CLEAR_DOG_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default dogErrorsReducer;