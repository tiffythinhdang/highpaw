import {
  RECEIVE_DOGS,
  RECEIVE_A_DOG
} from '../actions/dogs_action';


const dogsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_DOGS:
      action.dogs.data.forEach(dog => newState[dog._id] = dog)
      return newState;

    case RECEIVE_A_DOG:
      return Object.assign({}, state, { [action.dog.data._id]: action.dog.data });
  
    default:
      return state;
  }
};

export default dogsReducer;