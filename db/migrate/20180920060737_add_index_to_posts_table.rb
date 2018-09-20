class AddIndexToPostsTable < ActiveRecord::Migration[5.2]
  def change
    add_index :posts, :reblog_id
  end
end
