import {
  RECEIVE_DOGS,
  RECEIVE_USER_DOGS,
  RECEIVE_A_DOG
} from '../actions/dogs_action';


const dogsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DOGS:
      return Object.assign({}, state, { all: action.dogs.data });
  
    case RECEIVE_USER_DOGS:
      return Object.assign({}, state, { user: action.dogs.data });
  
    case RECEIVE_A_DOG:
      return Object.assign({}, state, { all: action.dogs.data });
  
    default:
      return state;
  }
};

export default dogsReducer;