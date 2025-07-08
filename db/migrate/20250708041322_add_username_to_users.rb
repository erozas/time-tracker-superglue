class AddUsernameToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :username, :string
    add_column :users, :slug, :string

    add_index :users, :username, unique: true
    add_index :users, :slug, unique: true
  end
end
