class SavingGoal < ApplicationRecord
  belongs_to :user

  validates :description, :amount, presence: true
  validates :description, uniqueness: true
end
