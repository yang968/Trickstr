import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import UsersReducer from './users_reducer';
import LikesReducer from './likes_reducer';
import FollowsReducer from './follows_reducer';
import FollowersReducer from './followers_reducer';
import ReblogsReducer from './reblogs_reducer';

export default combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
  likes: LikesReducer,
  follows: FollowsReducer,
  followers: FollowersReducer,
  reblogs: ReblogsReducer
})
