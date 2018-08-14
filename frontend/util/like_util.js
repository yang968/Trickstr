export const likePost = (postId) => (
  $.ajax({
    method: 'post',
    url: `/api/posts/${postId}/likes`
  })
);

export const getLikes = (userId) => (

);

export const getLikers = (postId) => (

);

export const deleteLike = (userId, postId) => (

);
