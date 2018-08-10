export const fetchPosts = () => (
  $.ajax({
    method: 'get',
    url: '/api/posts'
  })
);

export const createPost = (post) => (
  $.ajax({
    method: 'post',
    url: '/api/posts',
    data: { post }
  })
);

export const updatePost = (post) => (
  $.ajax({
    method: 'patch',
    url: `api/posts/${post.id}`,
    data: { post }
  })
);

export const deletePost = (id) => (
  $.ajax({
    method: 'delete',
    url: `api/posts/${id}`
  })
)
