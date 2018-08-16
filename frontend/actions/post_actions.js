import * as PostAPIUtil from '../util/post_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_LIKED_POSTS = "RECEIVE_LIKED_POSTS";

export const receiveAllPosts = (payload) => ({
  type: RECEIVE_ALL_POSTS,
  payload
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  postId: id
});

export const receiveLikedPosts = (posts) => ({
  type: RECEIVE_LIKED_POSTS,
  posts
})

export const fetchPosts = () => dispatch => {
  return PostAPIUtil.fetchPosts().then(payload => dispatch(receiveAllPosts(payload)));
};

export const createPost = (post) => dispatch => {
  return PostAPIUtil.createPost(post).then(post => dispatch(receivePost(post)));
};

export const updatePost = (post) => dispatch => {
  return PostAPIUtil.updatePost(post).then(post => dispatch(receivePost(post)));
};

export const deletePost = (id) => dispatch => {
  return PostAPIUtil.deletePost(id).then(post => dispatch(removePost(post.id)));
}

export const fetchLikedPosts = (userId) => dispatch => {
  return PostAPIUtil.fetchLikedPosts(userId).then(posts => dispatch(receiveLikedPosts(posts)));
}
