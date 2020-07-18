class CreateApiV1Users < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_users do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.integer :phone

      t.timestamps
    end
  end
end
