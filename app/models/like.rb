class Like < ApplicationRecord
  belongs_to :user
  
  belongs_to :post,
    foreign_key: :post_id

  def find_by_params(user_id, post_id)
    @like = Like.where(["user_id = ? and post_id = ?", user_id, post_id])

    (@like) ? @like : nil
  end
end
