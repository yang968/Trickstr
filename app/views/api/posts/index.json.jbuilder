json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :user_id, :post_type, :title, :description

      json.contents do
        json.array! post.contents do |content|
          json.url url_for(content)
        end
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
