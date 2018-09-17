json.follows do
  json.array! follows, :id, :username, :avatar
end

json.followers do
  json.array! followers, :id, :username, :avatar
end
