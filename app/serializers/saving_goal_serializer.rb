class SavingGoalSerializer < ActiveModel::Serializer
  attributes :id, :description, :amount

  belongs_to :user
end
