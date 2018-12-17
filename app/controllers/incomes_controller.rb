class IncomesController < ApplicationController
  before_action :set_income, except: [:create, :index]

  def index
    @user = current_user
    @incomes = @user.incomes

    render json: @incomes
  end

  def new
    @user = current_user
    @income = @user.income.build
  end

  def create
    @income = current_user.incomes.create(income_params)
    if @income.save
      flash[:success] = "Income was created"
      render json: @income
    else
      flash[:error] = "Income could not be created"
      redirect_to current_user
    end
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
    @income = current_user.incomes.find(params[:id])
  end

  def income_params
    params[:income].permit(:description, :amount)
  end


end
