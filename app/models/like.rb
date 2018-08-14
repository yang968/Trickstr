class Like < ApplicationRecord
  validates :user_id, uniqueness: { scope: :post_id }

  belongs_to :user
  belongs_to :post

  def find_by_params(user_id, post_id)
    @like = Like.where(["user_id = ? and post_id = ?", user_id, post_id])

    (@like) ? @like : nil
  end
end
