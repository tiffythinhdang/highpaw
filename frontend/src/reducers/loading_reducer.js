import { START_LOADING } from '../actions/loading_actions';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  RECEIVE_USER_LOGOUT
} from '../actions/session_actions';

import {
  RECEIVE_A_USER,
  RECEIVE_USER_ERRORS
} from '../actions/user_actions';

import {
  RECEIVE_DOGS,
  RECEIVE_A_DOG,
  RECEIVE_DOG_ERRORS
} from '../actions/dogs_action';

import {
  RECEIVE_ALL_WALKS,
  RECEIVE_WALK,
  REMOVE_WALK
} from '../actions/walk_actions';

import {
  RECEIVE_REQUESTS,
  RECEIVE_REQUEST,
  RECEIVE_REQUEST_ERRORS,
  REMOVE_REQUEST
} from '../actions/request_actions';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DOGS:
    case RECEIVE_A_DOG:
    case RECEIVE_DOG_ERRORS:
    case RECEIVE_CURRENT_USER:
    case RECEIVE_SESSION_ERRORS:
    case RECEIVE_USER_LOGOUT:
    case RECEIVE_A_USER:
    case RECEIVE_USER_ERRORS:
    case RECEIVE_ALL_WALKS:
    case RECEIVE_WALK:
    case REMOVE_WALK:
    case RECEIVE_REQUESTS:
    case RECEIVE_REQUEST:
    case RECEIVE_REQUEST_ERRORS:
    case REMOVE_REQUEST:
      return false;

    case START_LOADING:
      return true;

    default:
      return state;
  }
};

export default loadingReducer;
