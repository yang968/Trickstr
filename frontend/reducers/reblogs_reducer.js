import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../actions/post_actions';
import { merge } from 'lodash';

const ReblogsReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      if (action.payload.reblogs) return action.payload.reblogs;
      return state;
    default:
      return state;
  }
};

export default ReblogsReducer;
