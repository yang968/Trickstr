export const likePost = (post_id, user_id) => (
  $.ajax({
    method: 'post',
    url: `/api/likes`,
    data: { like: {post_id, user_id } }
  })
);

export const deleteLike = (like_id) => (
  $.ajax({
    method: 'delete',
    url: `/api/likes/${like_id}`
  })
);

// Postponed for later implementations.
// export const fetchLikers = (post_id) => (
//   $.ajax({
//     method: 'get',
//     url: `/api/posts/${post_id}/likes`,
//     data: { post}
//   })
// );
