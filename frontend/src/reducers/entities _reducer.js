import { combineReducers } from 'redux';
import dogsReducer from './dogs_reducer';

export default combineReducers({
  dogs: dogsReducer
})