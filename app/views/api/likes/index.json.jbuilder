json.likes do
  @likes.each do |like|
    json.set! like.post_id do
      json.extract! like.id
    end
  end
end
