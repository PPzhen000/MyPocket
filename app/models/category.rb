class Category < ApplicationRecord
  has_many :transactions
  has_many :users, through: :transactions

  def category_total
     self.transactions.sum(:amount)
  end

  def status
    if self.monthly_budget && self.category_total
      self.monthly_budget >= self.category_total ? "good" : "not good"
    end
  end

end
