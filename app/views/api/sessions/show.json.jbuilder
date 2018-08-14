json.extract! @user, :username, :title, :description

json.posts do
  json.array! @user.posts.collect{ |post| post.id }
end

json.likes do
  json.array! @user.liked_posts.collect{ |post| post.id }
end
