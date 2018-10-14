class User < ApplicationRecord
  has_secure_password

  has_many :transactions, :dependent => :destroy
  has_many :categories, through: :transactions

  validates :name, presence: true
  validates :name, uniqueness: true

end
