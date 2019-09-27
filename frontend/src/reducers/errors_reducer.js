import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import dogErrorsReducer from './dog_errors_reducer';
import userErrorsReducer from './user_errors_reducer';

const errorsReducer = combineReducers({
  session: SessionErrorsReducer,
  dog: dogErrorsReducer,
  user: userErrorsReducer
});

export default errorsReducer;
