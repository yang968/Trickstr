if follows.count > 0
  json.follows do
    follows.each do |follow|
      json.set! follow.user_id do
        follow.id
      end
    end
  end
else
  json.follows({})
end

json.followers do
  json.array! followers.collect{ |follow| follow.follower_id }
end
