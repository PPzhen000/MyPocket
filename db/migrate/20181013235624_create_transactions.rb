class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :description
      t.integer :amount
      t.integer :user_id
      t.integer :category_id
      t.timestamps
    end
  end
end
