module TransactionsHelper

  def was_created(transaction)
    transaction.created_at.strftime("%m/%d/%Y")
  end

  def self.by_category(category_id)
    where(category: category_id)
  end

end
