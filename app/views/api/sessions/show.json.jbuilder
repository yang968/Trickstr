json.extract! @user, :id, :username, :title, :description

json.posts do
  json.array! @user.posts.collect{ |post| post.id }
end

json.likes do
  json.array! @user.liked_posts.collect{ |post| post.id }
end

json.follows do
  @user.follows.each do |follow|
    json.set! follow.user_id do
      follow.id
    end
  end
end

json.followers do
  json.array! @user.followers.collect{ |follow| follow.follower_id }
end
