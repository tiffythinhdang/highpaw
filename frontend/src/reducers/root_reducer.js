import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import loadingReducer from './loading_reducer';
import { socketReducer } from './socket_reducer';
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
  entities: entitiesReducer,
  session: SessionReducer,
  errors: errorsReducer,
  socket: socketReducer, 
  loading: loadingReducer,
  ui: uiReducer
});

export default RootReducer;