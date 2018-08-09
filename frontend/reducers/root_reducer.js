import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
// import entitiesReducer from './entities';

export default combineReducers({
  session: SessionReducer
})
