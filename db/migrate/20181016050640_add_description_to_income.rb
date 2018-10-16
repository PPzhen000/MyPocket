class AddDescriptionToIncome < ActiveRecord::Migration[5.2]
  def change
    add_column :incomes, :description, :string
  end
end
