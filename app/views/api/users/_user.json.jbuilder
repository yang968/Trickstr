json.extract! user, :username, :title, :description

json.posts do
  json.array! user.posts.collect{ |post| post.id }
end
