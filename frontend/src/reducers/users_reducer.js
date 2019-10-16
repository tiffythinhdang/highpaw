import { RECEIVE_A_USER, RECEIVE_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_A_USER:
      return Object.assign({}, state, { [action.user.data._id]: action.user.data });
    case RECEIVE_USERS:
      newState = {};
      action.users.forEach(user => {
        newState[user._id] = user
      });
      return newState;
    default:
      return state;
  }
};

export default usersReducer;