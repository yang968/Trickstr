import { connect } from 'react-redux';
import PostIndex from './post_index';

import {
  fetchPosts,
  updatePost,
  deletePost,
  fetchLikedPosts,
  fetchOwnPosts
} from '../../actions/post_actions';

import { fetchFollows } from '../../actions/follow_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  posts: Object.values(state.entities.posts),
  users: state.entities.users,
  likes: state.entities.likes,
  follows: state.entities.follows,
  followers: state.entities.followers
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (id) => dispatch(deletePost(id)),
  fetchLikedPosts: (userId) => dispatch(fetchLikedPosts(userId)),
  fetchOwnPosts: (userId) => dispatch(fetchOwnPosts(userId)),
  fetchFollows: (userId) => dispatch(fetchFollows(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
