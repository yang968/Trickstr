class ChangePostsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :reblog_id, :integer
  end
end
