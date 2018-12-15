class SavingGoalsController < ApplicationController
  before_action :set_saving_goal, except: [:create, :index]

  def index
    @user = current_user
    @sgs = @user.saving_goals

    render json: @sgs 
  end

  def new
    @user = current_user
    @saving_goal = @user.saving_goals.build
  end

  def create
    # raise params.inspect
    @saving_goal = current_user.saving_goals.create(saving_goal_params)
    if @saving_goal.save
      flash[:success] = "Financial goal was created"
    else
      flash[:error] = "Financial goal could not be created"
    end
    redirect_to current_user
  end

  def edit
  end

  def destroy
    if @saving_goal.destroy
      flash[:success] = "Financial goal was deleted"
    else
      flash[:error] = "Financial goal could not be deleted"
    end
    redirect_to current_user
  end

  private
  def set_saving_goal
    @saving_goal = current_user.saving_goals.find(params[:id])
  end

  def saving_goal_params
    params[:saving_goal].permit(:description, :amount)
  end


end
