class User < ApplicationRecord
  has_secure_password

  has_many :transactions, :dependent => :destroy
  has_many :saving_goals, :dependent => :destroy
  has_many :incomes, :dependent => :destroy
  has_many :categories, through: :transactions

  validates_presence_of   :name, :message => "Please Enter User's  Name."
  validates_presence_of   :password, :message => 'Please Enter Your Password.'
  validates :name, uniqueness: true
  validates :name, format: { without: /[0-9]/, message: "does not allow numbers" }

end
