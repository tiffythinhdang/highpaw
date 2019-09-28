import { RECEIVE_ALL_WALKS, RECEIVE_WALK, REMOVE_WALK } from '../actions/walk_actions';

const walkReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_WALKS:
      let obj = {}
      action.walks.data.forEach(walk =>{
        // if (obj[walk._id] === undefined) {
         obj[walk._id] = walk
        // }
         });
      return obj;
      // return action.walks.data;
    case RECEIVE_WALK:
      return Object.assign({}, state, { [action.walk.id]: action.walk.data });
    case REMOVE_WALK:;
      
      delete newState[action.walkId];
      return newState;
    default:
      return state;
  }
};

export default walkReducer;