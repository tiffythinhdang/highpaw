import * as DogAPIUtil from '../util/dogs_api_util';

export const RECEIVE_DOGS = "RECEIVE_DOGS";
export const RECEIVE_A_DOG = "RECEIVE_A_DOG";

export const RECEIVE_DOG_ERRORS = "RECEIVE_DOG_ERRORS";
export const CLEAR_DOG_ERRORS = "CLEAR_DOG_ERRORS";

// actions
export const receiveDogs = dogs => ({
  type: RECEIVE_DOGS,
  dogs
});

export const receiveADog = dog => ({
  type: RECEIVE_A_DOG,
  dog
});

export const receiveDogErrors = errors => ({
  type: RECEIVE_DOG_ERRORS,
  errors
});

export const clearDogErrors = () => ({
  type: CLEAR_DOG_ERRORS
});

// thunk actions
export const fetchDogsFromWalk = (walkId) => dispatch => (
  DogAPIUtil.fetchDogsFromWalk(walkId)
    .then( dogs => dispatch(receiveDogs(dogs)) )
    .catch(err => dispatch(receiveDogErrors(err.response.data)) )
);

export const fetchDogsFromUser = (userId) => dispatch => (
  DogAPIUtil.fetchDogsFromUser(userId)
    .then( dogs => dispatch(receiveDogs(dogs)) )
    .catch(err => dispatch(receiveDogErrors(err.response.data)) )
);

export const fetchADog = (id) => dispatch => (
  DogAPIUtil.fetchADog(id)
    .then( dog => dispatch(receiveADog(dog)) )
    .catch(err => dispatch(receiveDogErrors(err.response.data)) )
);

export const createADog = (data) => dispatch => (
  DogAPIUtil.createADog(data)
    .then( dog => dispatch(receiveADog(dog)),
      err => dispatch(receiveDogErrors(err.response.data)) )
);

export const updateADog = (data) => dispatch => (
  DogAPIUtil.updateADog(data)
    .then( dog => dispatch(receiveADog(dog)),
      err => dispatch(receiveDogErrors(err.response.data)) )
);

export const deleteADog = (id) => dispatch => (
  DogAPIUtil.deleteADog(id)
    .then( dog => dispatch(receiveADog(dog)) )
    .catch(err => dispatch(receiveDogErrors(err.response.data)) )
);
