import { combineReducers } from 'redux';
import { requestsReducer } from './requests_reducer';
import { userReducer } from './users_reducer';

import walkReducer from './walk_reducer';
import dogsReducer from './dogs_reducer';

export default combineReducers({
  requests: requestsReducer,
  walks: walkReducer,
  dogs: dogsReducer,
  users: userReducer
})
