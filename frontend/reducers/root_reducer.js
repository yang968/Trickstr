import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import EntitiesReducer from './entities_reducer';

export default combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorReducer
})
