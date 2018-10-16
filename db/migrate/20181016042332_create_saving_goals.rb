class CreateSavingGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :saving_goals do |t|
      t.string :description
      t.integer :amount
      t.integer :user_id
      t.timestamps
    end
  end
end
