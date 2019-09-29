import { RECEIVE_REQUEST, RECEIVE_REQUESTS, REMOVE_REQUEST } from '../actions/request_actions';


export const requestsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REQUESTS:
        action.requests.data.forEach(data => {
          newState[data._id] = data
        })
        return newState
      // let obj = {};
      // actions.requests.data.forEach(data => {
      // obj[data._id] = data
      // })
      // return obj
    case RECEIVE_REQUEST:
      newState[action.request.data._id] = action.request.data;
      return newState;
    case REMOVE_REQUEST:
      delete newState[action.requestId];
      return newState;
    default:
      return state;
  }
}