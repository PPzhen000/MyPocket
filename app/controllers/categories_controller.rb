class CategoriesController < ApplicationController

  def edit
    @category = Category.find(params[:id])
  end

  def update
    # raise params.inspect
    @category = Category.find(params[:id])
    @category.update(category_params)
    if @category.save
      flash[:success] = "Monthly Budget was updated"
    else
      flash[:error] = "Monthly Budget could not be updated"
    end
    redirect_to current_user
  end

  private

  def category_params
    params.require(:category).permit(:name, :monthly_budget)
  end

end
