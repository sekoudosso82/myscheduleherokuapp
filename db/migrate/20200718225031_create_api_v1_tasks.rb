class CreateApiV1Tasks < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_tasks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :date_to_do
      t.string :status

      t.timestamps
    end
  end
end
