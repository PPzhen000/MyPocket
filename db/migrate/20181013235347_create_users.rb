class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.integer :income
      t.string :uid
      t.string :email
      t.string :image
    end
  end
end
