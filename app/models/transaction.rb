class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :description, :amount, presence: true
  validates :description, uniqueness: { scope: :user,
    message: "You already input this activity" }
  validates :amount, numericality: { only_integer: true }

  scope :most_recent, -> { order("created_at DESC")}
  scope :by_price, -> { order("amount DESC")}
  scope :by_category, -> (category_id) { where category_id: category_id }
end
