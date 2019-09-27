
import {
  RECEIVE_A_USER, RECEIVE_USER
} from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_A_USER:
      return Object.assign({}, state, { [action.user.data._id]: action.user.data });
   case RECEIVE_USER:
    newState[action.user.data._id] = action.user.data;
    return newState;

    default:
      return state;
  }
};

export default usersReducer;

