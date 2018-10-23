class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit]

  def index
    if logged_in?
      redirect_to user_path(current_user)
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    return render :new unless @user.save
    session[:user_id] = @user.id
    redirect_to user_path(@user)
  end

  def show
    @categories = Category.all

    if !params[:category].blank?
      @transactions = current_user.transactions.where(category: params[:category])
    else
      @transactions = current_user.transactions
    end
  end

  def edit
    return head(:forbidden) unless session.include? :user_id
  end

  private

    def set_user
      @user = User.find_by(id: params[:id])
    end

    def user_params
      params.require(:user).permit(
        :name,
        :password,
        :password_confirmation
      )
    end
end
