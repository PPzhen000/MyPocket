class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :description, :amount, presence: true
  validates :description, uniqueness: true
end
