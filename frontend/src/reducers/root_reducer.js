import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import SessionErrorsReducer from './session_errors_reducer';

const RootReducer = combineReducers({
  session: SessionErrorsReducer,
  errors: errorsReducer
});

export default RootReducer;