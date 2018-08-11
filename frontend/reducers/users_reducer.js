import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { merge } from 'lodash';

const UsersReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.payload.users;
    default:
      return state;
  }
};

export default UsersReducer;
