import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import { followUser, unfollowUser } from '../../actions/follow_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  followUser: (userId, currentUserId) => dispatch(followUser(userId, currentUserId)),
  unfollowUser: (userId) => dispatch(unfollowUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);
