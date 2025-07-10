class CreateTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :tasks do |t|
      t.references :project, null: false, foreign_key: true
      t.string :name
      t.text :description
      t.integer :alloted_time

      t.timestamps
    end
  end
end
