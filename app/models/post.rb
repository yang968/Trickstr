class Post < ApplicationRecord
  validates :user_id, :post_type, presence: true

  belongs_to :user
  
  has_many :likes, inverse_of: :post, dependent: :destroy, foreign_key: :post_id

  has_many :likers,
    through: :likes,
    source: :user

  has_many_attached :contents
end
