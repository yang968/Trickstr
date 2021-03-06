json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :user_id, :post_type, :title, :description, :reblog_id

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

json.reblogs @reblogs

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

  json.avatar url_for(@current_user.avatar) if @current_user.avatar
end

json.partial! '/api/follows/follow', follows: @follows, followers: @followers

json.likes do
  @likes.each do |like|
    json.set! like.post_id do
      json.extract! like, :id
    end
  end
end
