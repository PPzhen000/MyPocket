class Category < ApplicationRecord
  has_many :transactions
  has_many :users, through: :transactions

  def category_total
     self.transactions.sum(:amount)
  end

  def status
    if self.monthly_budget && self.category_total
      self.monthly_budget >= self.category_total ? "doing good" : "not so great"
    end
  end

  def total_spent
    total = 0
    self.each do |ca|
      total += ca.category_total
    end
    total
  end
end
