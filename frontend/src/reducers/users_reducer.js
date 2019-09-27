import { RECEIVE_USER } from '../actions/user_actions';

export const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_USER:
      newState[action.user.data._id] = action.user.data;
      return newState;
    default:
      return state;
  }
}