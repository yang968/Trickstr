json.follows do
  json.array! @follows.collect{ |follow| follow.user_id }
end

json.followers do
  json.array! @followers.collect{ |follow| follow.follower_id }
end
