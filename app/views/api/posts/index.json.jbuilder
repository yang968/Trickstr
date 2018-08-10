json.array! @posts do |post|
  json.extract! post, :id, :user_id, :title, :description
  json.photoUrl url_for(post.attachment)
end
