import { RECEIVE_REQUESTERS } from '../actions/requesters_action'

export const RequestersReducer = (state = {}, action) => {
  let newState = Object.assign({}, state)

  switch(action.type) {
    case RECEIVE_REQUESTERS:
      return newState[action.requesters.data] = action.requesters.data;
    default:
      return state;
  }
}