class TransactionsController < ApplicationController

  before_action :set_transaction, except: [:create]

  def new
    @user = current_user
    @transaction = @user.transactions.build
  end

  def create
    @transaction = current_user.transactions.create(transaction_params)
    @transaction.category_id = params[:transaction][:category_id]
    if @transaction.save
      flash[:success] = "Activity was created"
    else
      flash[:error] = "Activity could not be created"
    end
    redirect_to current_user

  end

  def edit
    @user = current_user
  end

  def update
    @transaction.update(transaction_params)
    if @transaction.save
      flash[:success] = "Activity was updated"
      redirect_to current_user
    else
      flash[:error] = "Activity could not be updated"
      redirect_to root_path
    end

  end

  def destroy
    if @transaction.destroy
      flash[:success] = "Activity was deleted"
    else
      flash[:error] = "Activity could not be deleted"
    end
    redirect_to current_user
  end

  private

  def set_transaction
    @transaction = current_user.transactions.find(params[:id])
  end

  def transaction_params
    params[:transaction].permit(:description, :amount, :category_id)
  end

end
