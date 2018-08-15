import { connect } from 'react-redux';
import Footer from './footer';
import { likePost, deleteLike } from '../../actions/like_actions';

const mapDispatchToProps = dispatch => ({
  likePost: (postId, userId) => dispatch(likePost(postId, userId)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId))
})

export default connect(null, mapDispatchToProps)(Footer);
