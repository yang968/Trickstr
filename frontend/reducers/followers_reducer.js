import { RECEIVE_ALL_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { merge } from 'lodash';

const FollowersReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      if (action.payload.followers) return action.payload.followers;
      return state;
    case RECEIVE_ALL_FOLLOWS || RECEIVE_FOLLOW || REMOVE_FOLLOW:
      return action.follow.followers;
    default:
      return state;
  }
}

export default FollowersReducer;
