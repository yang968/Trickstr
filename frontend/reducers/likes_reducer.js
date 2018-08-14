import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';

const LikesReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      // Using post_id of the like as key so when a user is deleting a like,
      // post_id can be used here to find the like_id
      // O(1) look up
      return merge({}, state, { [action.like.post_id]: action.like.id});
    case REMOVE_LIKE:
      let newState = merge({}, state);
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
}

export default LikesReducer;