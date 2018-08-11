json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :user_id, :post_type, :title, :description

      if post.contents.attached?
        json.array! post.contents do |content|
          json.extract! url_for(content)
        end
      end
      # json.srcUrl url_for(post.contents) if post.contents.attached?
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
