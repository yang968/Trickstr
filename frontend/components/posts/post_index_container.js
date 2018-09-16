import { connect } from 'react-redux';
import PostIndex from './post_index';

import {
  fetchPosts,
  updatePost,
  deletePost,
  fetchLikedPosts,
  fetchOwnPosts
} from '../../actions/post_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  posts: Object.values(state.entities.posts),
  users: state.entities.users,
  likes: state.entities.likes,
  follows: state.session.currentUser.follows
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (id) => dispatch(deletePost(id)),
  fetchLikedPosts: (userId) => dispatch(fetchLikedPosts(userId)),
  fetchOwnPosts: (userId) => dispatch(fetchOwnPosts(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
