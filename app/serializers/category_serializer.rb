class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :transactions
  has_many :users, through: :transactions
end
