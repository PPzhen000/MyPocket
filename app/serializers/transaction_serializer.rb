class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :description, :amount, :category_id

  belongs_to :user
  belongs_to :category
end
