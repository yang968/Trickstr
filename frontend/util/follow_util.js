export const followUser = (user_id, follower_id) => (
  $.ajax({
    method: 'post',
    url: `/api/follows`,
    data: { follow: { user_id, follower_id }}
  })
);

export const fetchFollowData = (currentUserId) => (
  $.ajax({
    method: 'get',
    url: `/api/users/${currentUserId}/follows`
  })
);

export const unfollowUser = (userId) => (
  $.ajax({
    method: 'delete',
    url: `/api/follows/${userId}`
  })
)
