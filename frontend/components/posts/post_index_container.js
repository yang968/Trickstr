import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, updatePost, deletePost } from '../../actions/post_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  posts: Object.values(state.entities.posts),
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (id) => dispatch(deletePost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
