import { RECEIVE_ALL_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { merge } from 'lodash';

const FollowsReducer = (state=[], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      if (action.payload.follows) return action.payload.follows;
      return state;
    case RECEIVE_ALL_FOLLOWS:
      return action.payload.follows;
    case RECEIVE_FOLLOW:
      return action.payload.follows;
    case REMOVE_FOLLOW:
      return action.payload.follows;
    default:
      return state;
  }
}

export default FollowsReducer;
