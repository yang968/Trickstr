class Post < ApplicationRecord
  validates :user_id, :type, presence: true
  belongs_to :user

  has_many_attached :attachment
end
