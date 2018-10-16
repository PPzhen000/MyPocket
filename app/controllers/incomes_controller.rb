class IncomesController < ApplicationController
  before_action :set_income, except: [:create]

  def new
    @user = current_user
    @income = @user.income.build
  end

  def create
    # raise params.inspect
    @income = current_user.income.create(income_params)
    if @income.save
      flash[:success] = "Income was created"
    else
      flash[:error] = "Income could not be created"
    end
    redirect_to current_user
  end

  def edit
  end

  def destroy
    if @income.destroy
      flash[:success] = "Income was deleted"
    else
      flash[:error] = "Income could not be deleted"
    end
    redirect_to current_user
  end

  private
  def set_income
    @income = current_user.income.find(params[:id])
  end

  def income_params
    params[:saving_goal].permit(:description, :amount)
  end


end
