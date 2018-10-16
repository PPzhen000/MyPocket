class Income < ApplicationRecord
  belongs_to :user

  validates :description, :amount, presence: true
  validates :description, uniqueness: { scope: :user,
    message: "You already input this activity" }
  validates :amount, numericality: { only_integer: true }

end
