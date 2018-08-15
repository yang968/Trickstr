class Follow < ApplicationRecord
  validates :user_id, uniqueness: { scope: :follower_id }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: 'User'

end
