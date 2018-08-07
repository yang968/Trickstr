class Api::UsersController < ApplicationController
  def show
    @user = User.find_by(username: params[:username])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)

    else
      flash[:errors] = ["Error"]
      render :new
    end
  end

  def edit
  end

  def update

  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
