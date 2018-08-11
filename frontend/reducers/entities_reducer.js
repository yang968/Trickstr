import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import UsersReducer from './users_reducer';

export default combineReducers({
  posts: PostsReducer,
  users: UsersReducer

})
