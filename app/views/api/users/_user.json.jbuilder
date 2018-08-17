json.extract! user, :username, :title, :description

json.posts do
  json.array! user.posts.collect{ |post| post.id }
end

json.avatar url_for(user.avatar) if user.avatar
