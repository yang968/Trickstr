json.follows do
  json.array! follows do |follow|
    json.id follow.id
    json.username follow.username
    json.avatar url_for(follow.avatar)
  end
end

json.followers do
  json.array! followers do |follower|
    json.id follower.id
    json.username follower.username
    json.avatar url_for(follower.avatar)
  end
end
