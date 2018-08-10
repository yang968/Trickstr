class ChangePostColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :posts, :type, :post_type
  end
end
