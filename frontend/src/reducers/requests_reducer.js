import { RECEIVE_REQUEST, RECEIVE_REQUESTS  } from '../actions/request_actions';


export const requestsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_REQUESTS:
      let obj = {};
      action.requests.data.forEach(data => {
        obj[data._id] = data
      })
      return obj;
    case RECEIVE_REQUEST:
      newState[action.request.data._id] = action.request.data;
      return newState;
    default:
      return state;
  }
}