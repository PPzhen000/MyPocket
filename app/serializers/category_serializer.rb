class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :monthly_budge

  has_many :transactions
  has_many :users, through: :transactions
end
