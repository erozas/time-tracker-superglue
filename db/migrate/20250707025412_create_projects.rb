class CreateProjects < ActiveRecord::Migration[8.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.string :slug

      t.timestamps
    end
    add_index :projects, :slug, unique: true
  end
end
