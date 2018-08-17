import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';

import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { RECEIVE_ALL_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

import { merge } from 'lodash';

const _nullSession = {
  currentUser: null,
}

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.user });
    case RECEIVE_ALL_POSTS:
      if (action.payload.currentUser) return Object.assign({}, { currentUser: action.payload.currentUser });
      return state;
    case RECEIVE_ALL_FOLLOWS:
    case RECEIVE_FOLLOW:
    case REMOVE_FOLLOW:
      let newState = merge({}, state);
      console.log(newState);
      newState.currentUser.follows = action.payload.follows;
      newState.currentUser.followers = action.payload.followers;
      return newState;
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
}

export default SessionReducer;
