import * as PostAPIUtil from '../util/post_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  postId: id
});

export const fetchPosts = () => dispatch => {
  return PostAPIUtil.fetchPosts().then(posts => dispatch(receiveAllPosts(posts)));
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
