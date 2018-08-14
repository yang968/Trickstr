import * as LikeAPIUtil from '../util/like_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveAllLikes = (likes) => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = (id) => ({
  type: REMOVE_LIKE,
  postId: id
});

export const likePost = (postId, userId) => dispatch => {
  return LikeAPIUtil.likePost(postId, userId).then(like => dispatch(receiveLike(like)));
};

export const fetchLikes = (userId) => dispatch => {
  return LikeAPIUtil.fetchLikes(userId).then(likes => dispatch(receiveAllLikes(likes)));
};

export const deleteLike = (likeId) => dispatch => {
  return LikeAPIUtil.deleteLike(likeId).then(like => dispatch(removeLike(like.post_id)));
}
