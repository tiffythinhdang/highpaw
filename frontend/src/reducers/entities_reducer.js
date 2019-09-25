import { combineReducers } from 'redux';
import { requestsReducer } from './requests_reducer';
import WalkReducer from './walk_reducer';

export default combineReducers({
  requests: requestsReducer,
  walks: WalkReducer
})
