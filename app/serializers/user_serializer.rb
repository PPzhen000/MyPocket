class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :password_confirmation

  has_many :transactions, :dependent => :destroy
  has_many :saving_goals, :dependent => :destroy
  has_many :incomes, :dependent => :destroy
  has_many :categories, through: :transactions
end
