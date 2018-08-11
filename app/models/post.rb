class Post < ApplicationRecord
  validates :user_id, :post_type, presence: true
  belongs_to :user

  has_many_attached :contents
end
