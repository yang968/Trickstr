import * as FollowAPIUtil from '../util/follow_util';

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveAllFollows = (payload) => ({
  type: RECEIVE_ALL_FOLLOWS,
  payload
});

export const receiveFollow = (payload) => ({
  type: RECEIVE_FOLLOW,
  payload
});

export const removeFollow = (payload) => ({
  type: REMOVE_FOLLOW,
  payload
});

export const followUser = (userId, currentUserId) => dispatch => {
  return FollowAPIUtil.followUser(userId, currentUserId).then(payload => dispatch(receiveFollow(payload)));
};

export const fetchFollows = (userId) => dispatch => {
  return FollowAPIUtil.fetchFollowData(userId).then(payload => dispatch(receiveAllFollows(payload)));
};

export const unfollowUser = (userId) => dispatch => {
  return FollowAPIUtil.unfollowUser(userId).then(payload => dispatch(removeFollow(payload)));
};
