json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :user_id, :post_type, :title, :description

      json.contents do
        json.array! post.contents do |content|
          json.url url_for(content)
        end
      end

      json.likers do
        json.array! post.likers.collect{ |liker| liker.id }
      end
    end
  end
end

json.users do
  @posts.each do |post|
    json.set! post.user.id do
      json.partial! 'api/users/user', user: post.user
    end
  end
end

json.currentUser do
  json.extract! @current_user, :id, :username, :title, :description

  json.posts do
    json.array! @current_user.posts.collect{ |post| post.id }
  end

  json.likes do
    json.array! @current_user.liked_posts.collect{ |post| post.id }
  end

  if @follows.count > 0
    json.follows do
      @follows.each do |follow|
        json.set! follow.user_id do
          follow.id
        end
      end
    end
  else
    json.follows({})
  end

  json.followers do
    json.array! @followers.collect{ |follow| follow.follower_id }
  end
end

json.likes do
  @likes.each do |like|
    json.set! like.post_id do
      json.extract! like, :id
    end
  end
end
