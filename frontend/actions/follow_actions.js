import * as FollowAPIUtil from '../util/follow_util';

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveAllFollows = (payload) => ({
  type: RECEIVE_ALL_FOLLOWS,
  payload
});

export const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = (userId) => ({
  type: REMOVE_FOLLOW,
  userId
});

export const followUser = (userId, currentUserId) => dispatch => {
  return FollowAPIUtil.followUser(userId, currentUserId).then(follow => dispatch(receiveFollow(follow)));
};

export const fetchFollows = (userId) => dispatch => {
  return FollowAPIUtil.fetchFollowData(userId).then(follows => dispatch(receiveAllFollows(follows)));
};

export const unfollowUser = (userId) => dispatch => {
  return FollowAPIUtil.unfollowUser(userId).then(userId => dispatch(removeFollow(userId)));
};
