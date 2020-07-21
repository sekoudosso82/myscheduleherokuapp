class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :date_to_do
      t.boolean :status

      t.timestamps
    end
  end
end
