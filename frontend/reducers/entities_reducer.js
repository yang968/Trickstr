import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import UsersReducer from './users_reducer';
import LikesReducer from './likes_reducer';

export default combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
  likes: LikesReducer

})
