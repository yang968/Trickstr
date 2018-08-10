@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :user_id, :post_type, :title, :description
    json.srcUrl url_for(post.attachment)
    json.username post.user.username # take out this line later
  end
end
