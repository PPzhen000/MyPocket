class RemoveMonthlyBudgetFromCategory < ActiveRecord::Migration[5.2]
  def change
    remove_column :categories, :monthly_budget, :integer
  end
end
