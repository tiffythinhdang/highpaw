import { combineReducers } from 'redux';
import { requestsReducer } from './requests_reducer';

import walkReducer from './walk_reducer';
import dogsReducer from './dogs_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
  requests: requestsReducer,
  walks: walkReducer,
  users: usersReducer,
  dogs: dogsReducer
})
