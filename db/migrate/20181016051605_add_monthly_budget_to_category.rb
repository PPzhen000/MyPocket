class AddMonthlyBudgetToCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :monthly_budget, :integer
  end
end
