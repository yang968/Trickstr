import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
// import entitiesReducer from './entities';

export default combineReducers({
  session: SessionReducer,
  errors: ErrorReducer
})
