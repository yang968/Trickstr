import { connect } from 'react-redux';
import PostIndexItem from './post_index_item';
import { followUser, unfollowUser } from '../../actions/follow_actions';

const mapDispatchToProps = dispatch => ({
  followUser: (userId, currentUserId) => dispatch(followUser(userId, currentUserId)),
  unfollowUser: (userId) => dispatch(unfollowUser(userId))
})

export default connect(null, mapDispatchToProps)(PostIndexItem);
